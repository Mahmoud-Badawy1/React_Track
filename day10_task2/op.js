
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
				title: "Hello From the one before the last one!",
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


// let {
// 	meta: { totalPages },
// } = data;

// get totalPages
// show self & first beside each other
// get the title of the data before the last one
// check if post id is less than 3 and type is articles - print "Pinned Article"
// check if totalPages is not equal to data length - print "inValid Data"

// get totalPages
let {
    meta: { totalPages },
  } = data;
  console.log(totalPages);
  // show self & first beside each other
  let { links: {self} } =data;
  let { links: {first} } =data;
  console.log(`Self: ${first}  ${self}`);

  
  // get the title of the data before the last one
  let{ data: [ , , , {attributes: {title}}, ], } = data;
  console.log(`Title before the last:  ${title}`);

    // check if totalPages is not equal to data length - print "Invalid Data"
//   if (totalPages !== data.data.length) {
//     console.log('Invalid Data');
//   }

let { data: dataArray } = data;
if (totalPages !== dataArray.length) {
    console.log("Invalid Data");
}

// check if post id is less than 3 and type is articles - print "Pinned Article"
  dataArray.forEach((item) => {
    if (parseInt(item.id) < 3 && item.type === 'articles') {
      console.log('Pinned Article');
    }
  });
  
