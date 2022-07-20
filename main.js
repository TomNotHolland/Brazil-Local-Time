function Clock() {
	var CurrentDateInfo = new Date();
	var Day = CurrentDateInfo.getDay(),
		MonthName = CurrentDateInfo.getMonth(),
		daynumber = CurrentDateInfo.getDate(),
		Hours = CurrentDateInfo.getHours(),
		Minutes = CurrentDateInfo.getMinutes(),
		Seconds = CurrentDateInfo.getSeconds()

	if (Hours === 24) {
		Hours = 00
	}

	Number.prototype.pad = function (digits) {
		for (var d = this.toString(); d.length < digits; d = 0 + d);
		return d;
	};

	var Months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];
	var Weekday = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	var elementID = [
		"dayName",
		"monthName",
		"dayNumber",
		"hour",
		"minutes",
		"seconds",
	]
	var Format = [
		Weekday[Day],
		Months[MonthName],
		daynumber.pad(2),
		Hours.pad(2),
		Minutes.pad(2),
		Seconds.pad(2)
	]
	for (var x = 0; x < elementID.length; x++)
		document.getElementById(elementID[x]).firstChild.nodeValue = Format[x];
}

function StartCounting() {
	Clock()
	window.setInterval("Clock()", 1000);
}
