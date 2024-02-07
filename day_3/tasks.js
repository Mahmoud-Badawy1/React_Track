// هنعمل مسافات بعدد ال rows -1
// من ناحية الشمال وفى اخرها نجمه وهتفضل المسافات تقل بمقدار واحد والنجوم تزداد بمقدار واحد لغاية لما توصل ان المسافاة بتساوى 0 
// وعدد النجوم بيساوى ال rows


function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let space = " ".repeat(rows - i - 1); // دى بتنفذ اول شرط وهو عدد المسافات بيساوى ال rows -1 وده لان ال i = 0
        let stars = "*".repeat(i + 1); // بنزود النجوم بقلة المسافات
        console.log(space);
    }
}

// Example:
printPattern(10);

// let row = 0;
// console.log(row++ + ++row);