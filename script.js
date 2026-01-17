const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices=Array.from(document.querySelectorAll(".prices")) 
	const total = prices.reduce((acc, el) => {
	return acc + (Number(el.textContent) || 0);
}, 0);

	const table=document.querySelector("table")
	const newRow=document.createElement("tr")
	const newData=document.createElement("td")
	newData.innerText=`${total}`
	table.appendChild(newRow)
	newRow.appendChild(newData)
};

getSumBtn.addEventListener("click", getSum);

