const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices=Array.from(document.querySelectorAll(".prices")) 
	const total = prices.reduce((acc, el) => {
	return acc + (Number(el.textContent) || 0);
}, 0);

	let ans = document.createElement("td");
		ans.id = "ans";

		const row = document.createElement("tr");
		row.appendChild(ans);

		document.querySelector("table").appendChild(row);
	ans.innerText = total;
};

getSumBtn.addEventListener("click", getSum);

