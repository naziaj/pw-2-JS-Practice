let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "WORD PRESS - INTRODUCTION",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "earn online, web development",
    features: ["Purchased", "HD"],
    viewCount: 1584,
    rating: 4.6
  },
  {
    title: "funny clips",
    lengthInMinutes: 6,
    category: "Entertainment",
    uploadDate: new Date("10-12-2018"),
    tags: "comedy, funny",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "Episode # 02 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("08-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145312,
    rating: 3.4
  },

];

// 1.Print each video in this format:
// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4,700
// Uploaded On: 22-July-2019
// Rating: 

for (let i = 0; i < videos.length; i++) {
  console.log("Title: " + videos[i].title);
  console.log("Length: " + videos[i].lengthInMinutes);
  console.log("Category: " + videos[i].category );
  console.log( "Views: " + videos[i].viewCount)

}
console.log('');

// 2.Print titles of all short ( less than 3 minutes ) videos.
for(let i =0 ; i< videos.length; i++){
  if (videos[i].lengthInMinutes < 3){
    console.log(videos[i].title)
  }
}
console.log('');

// 3.Print titles of all long ( greater than 20 minutes ) videos.

for (let i=0; i< videos.length; i++){
  if(videos[i].lengthInMinutes > 20){
    console.log(videos[i].title)
  }
}
console.log('');

// 4.Print titles of all medium length videos.

for (let i=0; i< videos.length; i++){
  if(videos[i].lengthInMinutes > 4 && videos[i].lengthInMinutes <15){
    console.log(videos[i].title)
  }
}
console.log('');

//5.Print title of the longest video.
