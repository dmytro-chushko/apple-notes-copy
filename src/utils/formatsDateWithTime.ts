import { DATE_TYPE } from "types/data.types";
import { modifyMonth } from "./formatsMonth";

export const formatsDateWithTime = (
  dateType: DATE_TYPE,
  inputDate?: string,
): string => {
  const date = inputDate ? new Date(inputDate) : new Date();
  const today = date.getDate() !== new Date().getDate();
  const day =
    dateType === DATE_TYPE.SIDE_BAR
      ? modifyDateOrTime(date.getDate())
      : date.getDate();
  const month = date.getMonth() + 1;
  const dayInterval = date.getHours() < 12 ? "AM" : "PM";
  const time = `${modifyHours(
    modifyDateOrTime(date.getHours()),
  )}:${modifyDateOrTime(date.getMinutes())} ${dayInterval}`;

  function modifyDateOrTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  function modifyHours(value: string): string {
    return +value > 12 ? `${+value - 12}` : `${value}`;
  }

  if (dateType === DATE_TYPE.SIDE_BAR) {
    return `${
      today
        ? `${day}/${modifyDateOrTime(month)}/${date
            .getFullYear()
            .toString()
            .slice(2)} `
        : `${time}`
    }`;
  }

  if (dateType === DATE_TYPE.WORKSPACE) {
    return `${modifyMonth(month)} ${day}, ${date.getFullYear()} at ${time}`;
  }

  return "Wrong type of date";
};
