export function AddDay(date: Date = new Date(), days: number) {
	date.setDate(date.getDate() + days);
	return date;
}
