"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path

from django.conf import settings
from django.conf.urls.static import static

from server.views.students import Students
from server.views.program import Program
from server.views.volunteers import Volunteers
from server.views.contact import Contact
from server.views.milestones import Milestones
from server.views.meetings import Meetings
import sys, os

ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import connect


connect("env-firebase-private.json")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', Students.as_view(), name='get-students'),
    path('program/', Program.as_view(), name='get-program'),
    path('volunteers/', Volunteers.as_view(), name='get-volunteers'),
    path('contact/', Contact.as_view(), name='get-contact'),
    path('milestones/<int:id>', Milestones.as_view(), name='get-milestones'),
    path('meetings/<int:id>', Meetings.as_view(), name='get-meetings'),
]
