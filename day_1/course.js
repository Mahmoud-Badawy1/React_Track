let data = {
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};


// get totalPages
const totalPages = data.meta.totalPages;
console.log(totalPages);
// show self & first beside each other
const selfLink = data.links.self;
const firstLink = data.links.first;
console.log(`Self Link: ${selfLink}, First Link: ${firstLink}`);
console.log(selfLink + firstLink);
// check if totalPages is equal to data length
const isTotalPagesEqualDataLength = totalPages === data.data.length;
console.log(`Total Pages is equal to Data Length: ${isTotalPagesEqualDataLength}`);

// get the title of the data before the last one
const titleBeforeLast = data.data[data.data.length - 2].attributes.title;
console.log(`Title of the Data Before the Last One: ${titleBeforeLast}`);

// check if post id is less than 3 and if type is articles
let isTypeIsArticles = data.data.some(item => item.type === 'articles'); 
 let isPostIdLessThan3= data.data.some(item => parseInt(item.id) < 3);
console.log(`Post ID is Less Than 3 and Type is Articles: ${isPostIdLessThan3 && isTypeIsArticles}`);
// check if post id is less than 3 and type is articles - print "Pinned Article"
if (isPostIdLessThan3 && isTypeIsArticles );
 console.log("Pinned Article");
// check if totalPages is not equal to data length - print "inValid Data"
if (totalPages !== data.data.length);
 console.log("inValid Data");

let code =10 ;

if (true) {
   let code = 5;
	console.log("ma",code);

}

console.log(code);
if (isPostIdLessThan3) {
	if(isTypeIsArticles){
		console.log("Pinned Article");
	}
}

