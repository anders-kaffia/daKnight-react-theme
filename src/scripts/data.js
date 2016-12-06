// jQuery
import $ from "jquery";

function getData(type) {

	// Call to APIs
	$.ajax( {
		url: '/wp-json/wp/v2/' + type + '/',
		type: 'GET',
		success : function (data) {
			const jsonData = JSON.stringify(data);
			localStorage.setItem(type + '-data', jsonData);
			return jsonData;
		},
		error : function (data, errorThrown) {
		  alert('Error:' + errorThrown);
		}
	} );
}

export default getData;