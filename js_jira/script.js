
function convert(form){
    if (blocker > 0) return false;
    var a = document.myForm.input.value;
    var emails = a.split(' ');

    var emailsWithOr = emails.join('" or email ~ "');
    var quote = '"';
    var startString = "email ~ ";
    emailsWithOrAndQuote = startString + quote + emailsWithOr + quote;
    console.log(emailsWithOrAndQuote);
    var div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = window.emailsWithOrAndQuote;
    document.body.appendChild(div);
    blocker ++;
    return;

}
