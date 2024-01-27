import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postList: Post[] = [
    {
      categoryName: 'Travel',
      image: 'assets/images/news/f1.jpg',
      title: 'The Best Soft Chocolate Chip Cookies',
      date: new Date('09-05-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Explore',
      image: 'assets/images/news/f2.jpg',
      title: 'How To Make The Best Baked Oatmeal',
      date: new Date('08-05-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Travel',
      image: 'assets/images/news/f3.jpg',
      title: '5 Ingredient Cilantro Vinaigrette',
      date: new Date('04-22-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f4.jpg',
      title: 'Lets Explore More',
      date: new Date('10-15-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f5.jpg',
      title: 'Ways To Reach Goals',
      date: new Date('06-07-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f6.jpg',
      title: 'Feel Like Home',
      date: new Date('03-04-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f7.jpg',
      title: 'Best Bridal Shower Tips',
      date: new Date('06-09-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f8.jpg',
      title: '8 Powerful Ways To Add Vibrant Colour To Your Life',
      date: new Date('09-06-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
    {
      categoryName: 'Experience',
      image: 'assets/images/news/f9.jpg',
      title: 'Manage Your Time In Easy Steps',
      date: new Date('12-31-2019'),
      content: 'Quisque hendrerit lobortis faucibus. Fusce quis dignissim nunc, eget scelerisque lectus. Nunc id eros vel ante consequat laoreet non et mauris.'
    },
  ]

  constructor() { }

  getPosts() {
    return this.postList;
  }
}
