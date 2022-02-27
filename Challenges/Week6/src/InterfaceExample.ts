interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
 }
 
 interface Sundae extends IceCream {
     sauce: 'chocolate' | 'caramel' | 'strawberry';
     nuts?: boolean;
     whippedCream?: boolean;
     instructions?: string;
 }
 
 // let iceCream: IceCream = {
 //    flavor: 'vanilla',
 //    scoops: 2
 // }
 
 let iceCream: Sundae = {
     flavor: 'vanilla',
     scoops: 2,
     sauce: 'caramel',
     nuts: true
 }
 
 console.log(iceCream.flavor);
 
 function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
 
 /* Create indexable types */
 
 interface IceCreamArray {
     [index: number]: string;
 }
 
 let myIceCream: IceCreamArray;
 myIceCream = ['chocolate', 'vanilla', 'strawberry'];
 let myStr: string = myIceCream[0];
 console.log(myStr);
 
 
 /* Describe a JavaScript API using an interface */
 
 const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
 // Interface describing the shape of our json data
 interface Post {
     userId: number;
     id: number;
     title: string;
     body: string;
 }
 async function fetchPosts(url: string) {
     let response = await fetch(url);
     let body = await response.json();
     return body as Post[];
 }
 async function showPost() {
     let posts = await fetchPosts(fetchURL);
     // Display the contents of the first item in the response
     let post = posts[0];
     console.log('Post #' + post.id)
     // If the userId is 1, then display a note that it's an administrator
     console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
     console.log('Title: ' + post.title)
     console.log('Body: ' + post.body)
 }
 
 showPost();