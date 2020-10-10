import dash ### layout + interactivity
import dash_core_components as dcc  ### interactivity class
import dash_bootstrap_components as dbc  ### html class
import dash_html_components as html     ### html class
import plotly.express as px
import pandas as pd    #### data manipulation and storage
from jupyter_dash import JupyterDash
from dash.dependencies import Input, Output
import numpy as np
import os
import sys
from datetime import datetime

ROOT_DIR = "/home/ishaan/Desktop/CFG/team-27"
print(ROOT_DIR)
sys.path.append(ROOT_DIR)

from firebase.connect import connect, get_collection
from firebase_admin import firestore, initialize_app, credentials
import firebase_admin
from django_plotly_dash import DjangoDash

connect("cfg-2020-team-27-firebase-adminsdk-z2qqh-527dd19b08.json")

app = DjangoDash('Visualizations', add_bootstrap_links=True)

stu = get_collection("students")
df = pd.DataFrame(stu)
df["attend"] = 1
df['Grade level'] = df['Grade level'].apply(int)

def dt_to_int(y):
    y = pd.to_datetime(str(y))
    return int(y.strftime('%Y%m'))

fdbk = get_collection("ProgramFeedback")
student = pd.DataFrame(fdbk)
student = student[["Program Name","Student","2019/01","2019/04","2019/07","2019/10","2020/01","2020/04","2020/07","2020/10"]] 

datetime = student.columns.values[2:]
# print(datetime)
dflist = []
for i in range(len(student)):
    df1 = pd.DataFrame(list(student.iloc[i])[2:])
    df1['student'] = student.iloc[i]['Student']
    df1['Program Name'] = student.iloc[i]['Program Name']
    df1['datetime'] = pd.DataFrame(datetime)
    dflist.append(df1)
df1 = pd.concat(dflist)
df1.columns = ['score', 'Student', 'Program Name', 'datetime'] 

df1["datetime"] = pd.to_datetime(df1["datetime"], format = '%Y/%m')

df1['score'] = df1['score'].apply(lambda x: int(x))
pivot = pd.pivot_table(df1, index=['datetime', 'Student', 'Program Name'], values='score', aggfunc=np.mean)
df_new = pivot.reset_index()


def create_line_graph(df, metric):
    line_graph = px.line(df, x= "datetime" , y= metric , color="Student") 
    return line_graph

def create_bar_plot(df, metric):
    bar_chart = px.bar(df, x=metric, y='attend') 
    return bar_chart

def create_tree_map(df, metric):
    #### Step 4: Fill in path (hierarchy) parameter in treemap
    hierarchy = ['school']
    tree_map = px.treemap(df, path=hierarchy, color=metric, values='attend', color_continuous_scale='RdBu')
    return tree_map

def create_pie_chart(df, metric):
    pie_chart = px.pie(df, values='attend', names=metric, title='pie chart')
    return pie_chart 

title = {
    'font-family': 'Poppins',
    'font-weight': 'bold',
    'font-size': '4em'
}
card = {
    'border-radius': '1em',
    'border': 0,
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    'color': 'black',
    'font-family': 'Open Sans',
    "padding": "5px"
}
row = {
    'margin-bottom':'2em'
}
cell = {
    "padding": "5px",
    "textAlign": "center",
    'color': 'black'
}
header = {
    "backgroundColor": "rgb(230, 230, 230)",
    "fontWeight": "bold",
}
dashboard = {
    'background': '#232946', 
    'padding': '2em 8em 2em 8em', 
    'color': 'white'
}

external_stylesheets = ["https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;500;700&display=swap", dbc.themes.BOOTSTRAP]

### Step 5: Add the title and empty graphs
title_component = html.Div(html.H1("Dashboard", style=title))
line_graph = dcc.Graph(id='line-graph')
bar_plot = dcc.Graph(id='bar_plot')
tree_map = dcc.Graph(id='tree')
pie_chart = dcc.Graph(id='pie')

line_card = dbc.Card(line_graph, style=card)
bar_card = dbc.Card(bar_plot, style=card)
tree_card = dbc.Card(tree_map, style=card)
pie_card = dbc.Card(pie_chart, style=card)

######## widget 6a ###############
schoolDropdown = dcc.Dropdown(
    id='school-dropdown', 
    options=[{'label': c, 'value': c} for c in df['school'].unique()], 
    multi=True, 
    value=["KING'S COLLEGE"]
)

######## widget 6b ###############
metricRadio = dcc.RadioItems(
    id='metric-radio',
    labelStyle = {'marginRight': '.5em'},
    inputStyle= {'margin': '.5em'},
    options= [
        {'label': 'Gender', 'value': 'Gender'},
        {'label': 'Program', 'value': 'Program'},
    ],
)

######## widget 6c ###############
yearSlider = dcc.RangeSlider(
    id='year-range-slider',
    min=df['Grade level'].min(),
    max=df['Grade level'].max(),
    marks={int(y): str(y) for y in df['Grade level'].unique()},
    step=None,
    pushable=1,
    value=[df['Grade level'].quantile(.1, 'nearest'), df['Grade level'].quantile(.9, 'nearest')]
)

######## widget 7a ###############
programDropdown = dcc.Dropdown(
    id='program-dropdown', 
    options=[{'label': c, 'value': c} for c in df_new['Program Name'].unique()], 
    multi=True, 
    value=['Code with Python']
)

######## widget 7a ###############
nameDropdown = dcc.Dropdown(
    id='name-dropdown', 
    options=[{'label': c, 'value': c} for c in df_new['Student'].unique()], 
    multi=True, 
    value=[]
)

widget_card = dbc.Card([
                    html.Div(yearSlider),
                    html.Div(metricRadio),
                    html.Div(schoolDropdown)
                    ], style=card)

widget_card1 = dbc.Card([
                    html.Div(programDropdown),
                    html.Div(nameDropdown)
                    ], style=card)

layout = dbc.Container(
    [
        dbc.Row(
            dbc.Col(title_component),
            justify="center",
            align="center",
            className="text-center",
            style=row
        ),
        
#### Uncomment after step 7
        dbc.Row(widget_card, style=row),
        dbc.Row(bar_card, style=row),
        dbc.Row(tree_card,  style=row),
        dbc.Row(pie_card,  style=row),
        
        dbc.Row(widget_card1, style=row),
        dbc.Row(line_card, style=row),
#         dbc.Row(tree_card,  style=row),
#         dbc.Row(pie_card,  style=row),
    ],
    style=dashboard,
    fluid = True,
)
app.layout = layout

##### Step 8: Filter the dataframe according to widget values
def get_filtered_df(df, year_range, schools):
    filtered_df = df[ (df['Grade level'] >= year_range[0]) &
                    (df['Grade level'] <= year_range[1]) &
                    (df['school'].isin(schools))]
    
    return filtered_df
get_filtered_df(df, [1,4], ["KING'S COLLEGE"])

def get_filtered_range(df, pname, students):
    filtered_df = df[(df['Program Name'].isin(pname)) &
                    (df['Student'].isin(students))]
    
    return filtered_df

@app.callback(
    Output('bar_plot', 'figure'),
    Output('tree', 'figure'),
    Output('pie', 'figure'),
    [
        Input('year-range-slider', 'value'),
        Input('school-dropdown', 'value'),
        Input('metric-radio', 'value')
    ])
def update_figure(year_range, schools, metric):

    if schools is None : schools = ["KING'S COLLEGE"]

    filtered_df = get_filtered_df(df, year_range, schools)
    
    bar_fig = create_bar_plot(filtered_df, metric)
    tree_fig = create_tree_map(filtered_df, metric)
    pie_fig = create_pie_chart(filtered_df, metric)

    bar_fig.update_layout()
    tree_fig.update_layout()
    pie_fig.update_layout()
    
    return bar_fig, tree_fig ,pie_fig

@app.callback(
    Output('line-graph', 'figure'),
    [
        Input('program-dropdown', 'value'),
        Input('name-dropdown', 'value')
    ])
def update_figure(pname, students, metric = "score"):

    if pname is None : pname = ["Code with Python"]
    if students is None : students = ["Kelly"]

    filtered_df = get_filtered_range(df_new, pname, students)
    
    line_fig = create_line_graph(filtered_df, metric)
#     tree_fig = create_tree_map(filtered_df, metric)

    line_fig.update_layout()
#     tree_fig.update_layout()
    
    return line_fig