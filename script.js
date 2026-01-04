function firstNonRepeatedChar(str) {
	
   for (int i=0;i<str.length();i++) {
  freq[i] = (freq[i] || 0) + 1;
}
	for (int i=0;i<freq.length;i++){
		if (freq[i]==1){
			return (char) (i + 'a'); 
		}
	}
	return null;
}
const input = prompt("Enter a string");
 alert(firstNonRepeatedChar(input));
