// Script give Hotel Description (name, price, discount) and calculate when will dicount time over

(function() {
	var hotel = {
		hName: "Grand",
		hCost: 235,
		hDiscount: 7,
		calculatePriceDiscount: function() {
			var hCostDiscount = Math.round(this.hCost * ((100 - this.hDiscount) / 100));
			return hCostDiscount;
		}
		
	};
	var hotelName, hotelCost, hotelDiscount;
	hotelName = document.getElementById('hotel');
	hotelCost = document.getElementById('price');
	hotelDiscount = document.getElementById('discount');
	hotelName.textContent = hotel.hName;
	hotelCost.textContent = hotel.hCost + ' zł';
	hotelDiscount.textContent = hotel.calculatePriceDiscount();
	
	function expDiscount() {
		var dataDiscount, numberDayDiscount, numberMonthDiscount, days, months, dayDiscount, monthDiscount, expStatement;
		dataDiscount = new Date(new Date() + 7 * 24 * 60 * 60 * 1000);
		numberDayDiscount = dataDiscount.getDay();
		numberMonthDiscount = dataDiscount.getMonth();
		days = ['Poniedzialek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
		months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
		dayDiscount = days[numberDayDiscount];
		monthDiscount = months[numberMonthDiscount];
		expStatement = document.getElementById('statement');
		expStatement.textContent = "Promocja w wysokości " + hotel.hDiscount + "/% obowiązuje do " + dayDiscount + " " + monthDiscount;
	}
	expDiscount();
}());