import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const toDoStyle = { background: "rgb(255,140,0)", color: "#fff" };
const finishedStyle = { background: "rgb(16, 204, 82)", color: "#fff" };

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
        <VerticalTimeline>
            {contents.map((t) => {
                if (t.type === "todo") {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={finishedStyle}
                            contentArrowStyle={finishedStyle}
                            iconStyle={finishedStyle}
                            date={t.date}
                            icon={<FaCheckCircle />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t.content.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Done
                            </h4>
                            <p>{t.content.desc}</p>
                        </VerticalTimelineElement>
                    );
                } else {
                    return (
                        <VerticalTimelineElement
                            iconStyle={toDoStyle}
                            contentStyle={toDoStyle}
                            contentArrowStyle={toDoStyle}
                            date={t.date}
                            icon={<FaExclamationCircle />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t.content.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                To-do
                            </h4>
                            <p>{t.content.desc}</p>
                        </VerticalTimelineElement>
                    );
                }
            })}
        </VerticalTimeline>
    );
}
