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

const nummap = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
};

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
                        let xs = x.date.split(" ");
                        let ys = y.date.split(" ");
                        xs[0] =
                            nummap[xs[0].substring(0, 3).toLowerCase()] || 0;
                        ys[0] =
                            nummap[ys[0].substring(0, 3).toLowerCase()] || 0;
                        return ys[0] - xs[0] || ys[1] - xs[1];
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
