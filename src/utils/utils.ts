import moment, { Moment } from 'moment';

export const getStartOfMonth = (m: Moment) => m.clone().startOf('month');

export const getMonthlyData = (d: Moment) => {
  const today = moment();
  const sWeek = d.clone().startOf('month').week();

  let eWeek =
    d.clone().endOf('month').week() === 1
      ? 53
      : d.clone().endOf('month').week();

  eWeek = 5 - (eWeek - sWeek) + eWeek;

  const monthlyData = [];

  for (let week = sWeek; week <= eWeek; week++) {
    monthlyData.push(
      Array(7)
        .fill(null)
        .map((n, i) => {
          const time = d
            .clone()
            .week(week)
            .startOf('week')
            .add(n + i, 'day');

          const isToday = today.format('YYYYMMDD') === time.format('YYYYMMDD');

          const disable = time.format('MM') !== d.format('MM');
          return {
            disable,
            time,
            isToday,
            y: time.year(),
            m: time.month() + 1,
            d: time.date(),
          };
        }),
    );
  }

  return monthlyData;
};

export const makeTimeOptions = () => {
  const items: Array<{ label: string; value: string; m: Moment }> = [];
  new Array(24).fill(null).forEach((acc, index) => {
    const h = moment({ hour: index });
    const hHalf = moment({ hour: index, minute: 30 });

    items.push({
      label: h.format('A h:mm'),
      value: h.format('HH:mm'),
      m: h,
    });
    items.push({
      label: hHalf.format('A h:mm'),
      value: hHalf.format('HH:mm'),
      m: hHalf,
    });
  });
  return items;
};

export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
