function indexOfIgnoreCase(s1, s2) {
  // write your code here

	const str1 = s1.toLowerCase(s1);
	const str2 = s2.toLowerCase(s2);

	return str1.indexOf(str2);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
