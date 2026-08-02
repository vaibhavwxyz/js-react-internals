let arr = [2, 8, 9, 1, 8, 2, 4, 7];
let ans = new Set(arr);
let at = ans;
console.log(at);

// --- Basic operations ---
ans.add(10); // add a value
ans.delete(9); // remove a value
console.log(ans.has(8)); // check membership -> true
console.log(ans.size);
console.log([...ans]); // convert back to array

// --- Iterating ---
for (let val of ans) {
  console.log(val);
}
ans.forEach((val) => console.log(val));
