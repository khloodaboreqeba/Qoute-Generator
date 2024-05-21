var btn=document.getElementById('btn');
var output=document.getElementById('output');
var quotes=["Be yourself; everyone else is already taken. -Oscar Wilde",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.-Marilyn Monroe",
"So many books, so little time.― Frank Zappa",
"A room without books is like a body without a soul.― Marcus Tullius Cicero",
"You only live once, but if you do it right, once is enough.― Mae West",
"Be the change that you wish to see in the world.― Mahatma Gandhi",
"If you tell the truth, you don't have to remember anything.― Mark Twain",
"A friend is someone who knows all about you and still loves you.― Elbert Hubbard",
"To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde"
]

btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML=randomQuote;

});
