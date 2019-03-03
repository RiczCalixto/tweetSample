import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

const path = require('path');

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Ricardo Calixto',
        avatar: path.resolve(__dirname, '/images', 'boy.svg'),
        time: 'há 17 min',
        body: "My first post. Let's aim to Canada!!!",
      },
      {
        id: 2,
        name: 'Fabio Rabin',
        avatar: './images/girl.svg',
        time: 'há 39 min',
        body:
          'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Manduma pindureta quium dia nois paga. Quem num gosta di mim que vai caçá sua turmis!',
      },
      {
        id: 3,
        name: 'Aretuza',
        avatar: './images/man.svg',
        time: 'há 3 hrs',
        body:
          'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Paisis, filhis, espiritis santis. Per aumento de cachacis, eu reclamis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Si num tem leite então bota uma pinga aí cumpadi! Pra lá , depois divoltis porris, paradis. Em pé sem cair, deitado sem dormir. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Manduma pindureta quium dia nois paga. Delegadis gente finis, bibendum egestas augue arcu ut est. Suco de cevadiss deixa as pessoas mais interessantis.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="div-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}
