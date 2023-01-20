const nav_links = document.querySelectorAll(".nav-item");
const number_nav = document.querySelectorAll(".numbers_nav");
const search_cont = document.querySelector(".search_krubbs_container");

function SelectAndUnselect(query_list, class_to_add) {
	for (let i = 0; i < query_list.length; i++) {
		query_list[i].addEventListener("click", select);
	}
	function select() {
		deselect(this);
		this.classList.add(class_to_add);
	}
	function deselect(c) {
		for (let i = 0; i < query_list.length; i++) {
			if (query_list[i] != c) {
				query_list[i].classList.remove(class_to_add);
			}
		}
	}
}

SelectAndUnselect(nav_links, "active_nav");
SelectAndUnselect(number_nav, "nav_num_active");
SelectAndUnselect(
    document.querySelectorAll('.second_nav'),
    'text-dark'
)

search_cont.addEventListener("click", (e) => {
	let item_target = e.target;
	document.addEventListener("click", (e) => {
		let currTarget = e.target;
		if (item_target === currTarget) {
			search_cont.classList.add("search_active");
		} else {
			search_cont.classList.remove("search_active");
		}
	});
});
