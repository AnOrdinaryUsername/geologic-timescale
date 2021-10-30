import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import type { GeologicEvents } from "./events";
import { events } from "./events";

const PIXELS_IN_ONE_MILLION_YEARS = 10;
const MILLION = 1_000_000;
const BILLION = 1_000_000_000;

interface Props extends GeologicEvents {
  position: number;
}

export default function Event({ name, date, position }: Props) {
  let readableDate: string;

  if (date > BILLION) {
    readableDate = `${parseFloat((date / BILLION).toString()).toFixed(
      1
    )} billion years ago`;
  } else if (date > MILLION) {
    readableDate = `${Number(
      parseFloat((date / MILLION).toString()).toFixed(2)
    )} million years ago`;
  } else {
    readableDate = `${makeNumberHaveCommas(date)} years ago`;
  }

  let yearDifference = 0;
  const nextDate = position + 1;

  if (nextDate < events.length) {
    yearDifference = events[position].date - events[nextDate].date;
  }

  const lineLength = convertMYAToPx(yearDifference);
  const shouldHideLine = lineLength === 0 ? "none" : "initial";

  const line = (
    <TimelineConnector
      sx={{ height: `${lineLength}px`, display: shouldHideLine }}
    />
  );

  return (
    <TimelineItem sx={{ minHeight: "auto" }}>
      <TimelineOppositeContent color="text.secondary">
        {readableDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {line}
      </TimelineSeparator>
      <TimelineContent>{name}</TimelineContent>
    </TimelineItem>
  );
}

function convertMYAToPx(years: number): number {
  const MYA = years / MILLION;
  return MYA * PIXELS_IN_ONE_MILLION_YEARS;
}

function makeNumberHaveCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
