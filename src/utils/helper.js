export const numberToMoneyString = (value) => {
	return value.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}