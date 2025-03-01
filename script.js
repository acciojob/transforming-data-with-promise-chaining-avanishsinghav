//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=>{
	let Num = parseFloat(document.getElementById("ip").value);
	new Promise((resolve) =>{
		setTimeout(()=>{
			document.getElementById("output").innerText = `Result:  ${Num}`;
			resolve(Num);
		},2000)
	})
	.then((value)=>
		new Promise((resolve)=>{
			setTimeout(()=>{
				let result = value*2;
				document.getElementById("output").innerText = `Result: ${result}`;
				resolve(result);
			},2000)
		}))
	    .then((value) =>
			new Promise((resolve)=>{
				setTimeout(()=>{
					let result = value - 3;
					document.getElementById("output").innerText = `Result: ${result}`;
					resolve(result);
				},1000)
			})
		)
	    .then((value) =>
			new Promise((resolve)=>{
				setTimeout(()=>{
					let result = value /2;
					document.getElementById("output").innerText = `Result: ${result}`;
					resolve(result);
				},1000)
			})
		)
	   .then((value) =>
			new Promise((resolve)=>{
				setTimeout(()=>{
					let result = value + 10;
					document.getElementById("output").innerText = `Result: ${result}`;
					resolve(result);
				},1000)
			})
		)
})