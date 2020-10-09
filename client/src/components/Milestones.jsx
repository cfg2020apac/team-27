import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const toDoStyle = { background: "white", color: "black", opacity: "0.5" };
const finishedStyle = { background: "white", color: "black", opacity: "0.5" };
const currStyle = { background: "white", color: "black" , opacity: "1"};

export default function Milestones() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const getMilestones = async () => {
            const res = await axios.get("http://localhost:8000/milestones/1");
            setContents(
                res.data.milestones
                    .map((t) => {
                        if (t.type === "finished") {
                            return {
                                type: "finished",
                                date: t.date,
                                content: {
                                    title: t.title,
                                    desc: t.desc,
                                },
                            };
                        } else if (t.type === "current") {
                            return {
                                type: "current",
                                date: t.date,
                                content: {
                                    title: t.title,
                                    desc: t.desc,
                                },
                            };
                        } else {
                            return {
                                type: "todo",
                                date: t.date,
                                content: {
                                    title: t.title,
                                    desc: t.desc,
                                },
                            };
                        }
                    })
                    .sort((x, y) => {
                        return y.type.localeCompare(x.type);
                    })
            );
        };

        if (!contents.length) {
            getMilestones();
        }
    }, []);

    if (!contents.length) {
        return (
            <div>
                <Spinner
                    animation="grow"
                    variant="success"
                    style={{ marginTop: "2em", marginBottom: "2em" }}
                />
                <br />
                <Spinner
                    animation="grow"
                    variant="success"
                    style={{ marginBottom: "2em" }}
                />
                <br />
                <Spinner
                    animation="grow"
                    variant="success"
                    style={{ marginBottom: "2em" }}
                />
            </div>
        );
    }

    return (
        <VerticalTimeline animate={false}>
            {contents.map((t, index) => {
                if (t.type === "finished") {
                    console.log("Finished!!");
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={finishedStyle}
                            contentArrowStyle={finishedStyle}
                            iconStyle={finishedStyle}
                            date={t.date}
                            icon={<FaCheckCircle />}
                        >
                            <div style={{textAlign: "left"}}>
                                <h5 className="vertical-timeline-element-title">
                                    {t.content.title}
                                </h5>
                            </div>
                        </VerticalTimelineElement>
                    );
                } else if (t.type === "current") {
                    console.log("current!!!");
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={currStyle}
                            contentArrowStyle={currStyle}
                            iconStyle={currStyle}
                            date={t.date}
                            icon={<FaCheckCircle />}
                        >
                            <div style={{textAlign: "left"}}>
                                <h5 className="vertical-timeline-element-title">
                                    {t.content.title}
                                </h5>
                            </div>
                        </VerticalTimelineElement>
                    )
                } else {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            iconStyle={toDoStyle}
                            contentStyle={toDoStyle}
                            contentArrowStyle={toDoStyle}
                            date={t.date}
                            icon={<FaExclamationCircle />}
                        >
                            <div style={{textAlign: "left"}}>
                                <h5 className="vertical-timeline-element-title">
                                    {t.content.title}
                                </h5>
                                <p>{t.content.desc}</p>
                            </div>
                        </VerticalTimelineElement>
                    );
                }
            })}
        </VerticalTimeline>
    );
}
