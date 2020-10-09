import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const toDoStyle = { background: "rgb(255,140,0)", color: "#fff" };
const finishedStyle = { background: "rgb(16, 204, 82)", color: "#fff" };

const contents = [
    {
        type: "todo",
        date: "October 2020 Due",
        content: (
            <>
                <h3 className="vertical-timeline-element-title">Prototype A</h3>
                <h4 className="vertical-timeline-element-subtitle">To-do</h4>
                <p></p>
            </>
        ),
    },
    {
        type: "finished",
        date: "May 2020",
        content: (
            <>
                <h3 className="vertical-timeline-element-title">
                    Design thinking workshop II
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Done</h4>
                <p>Completed design thinking workshop.</p>
            </>
        ),
    },
    {
        type: "finished",
        date: "April 2020",
        content: (
            <>
                <h3 className="vertical-timeline-element-title">
                    Design thinking workshop I
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Done</h4>
                <p>Completed design thinking workshop.</p>
            </>
        ),
    },
    {
        type: "finished",
        date: "March 2020",
        content: (
            <>
                <h3 className="vertical-timeline-element-title">
                    Proposal submission
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Done</h4>
                <p>Proposal received by company A.</p>
            </>
        ),
    },
];

export default function Milestones() {
    return (
        <VerticalTimeline>
            {contents.map((t) => {
                if (t.type === "todo") {
                    return (
                        <VerticalTimelineElement
                            iconStyle={toDoStyle}
                            contentStyle={toDoStyle}
                            contentArrowStyle={toDoStyle}
                            date={t.date}
                            icon={<FaExclamationCircle />}
                        >
                            {t.content}
                        </VerticalTimelineElement>
                    );
                } else {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={finishedStyle}
                            contentArrowStyle={finishedStyle}
                            iconStyle={finishedStyle}
                            date={t.date}
                            icon={<FaCheckCircle />}
                        >
                            {t.content}
                        </VerticalTimelineElement>
                    );
                }
            })}
        </VerticalTimeline>
    );
}
