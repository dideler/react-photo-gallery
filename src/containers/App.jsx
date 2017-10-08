import React, { Component } from 'react';

import './App.css';
import withGallery from 'containers/withGallery';
import Image from 'components/Image';
import Signature from 'components/Signature';

import logo from 'images/logo.svg';
import feynman from 'images/richard-feynman.jpg';

const galleryStore = [];
const GalleryImage = withGallery(Image, galleryStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Surely You're Joking, Mr. Feynman!</h1>
        </header>

        <article className="App-intro">
          <GalleryImage
            src={feynman}
            caption="Richard Feynman was one of the greatest problem solvers of the 20th century and loved being puzzled"
          />

          <h2>Preface</h2>
          <p>
            The stories in this book were collected intermittently and
            informally during seven years of very enjoyable drumming with
            Richard Feynman. I have found each story by itself to be amusing,
            and the collection taken together to be amazing: That one person
            could have so many wonderfully crazy things happen to him in one
            life is sometimes hard to believe. That one person could invent so
            much innocent mischief in one life is surely an inspiration!
          </p>
          <Signature author="Ralph Leighton" />

          <GalleryImage
            src="https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?dpr=1&auto=compress,format"
            caption="The night was dark and full of terrors"
          />

          <h2>Introduction</h2>
          <p>
            I hope these won't be the only memoirs of Richard Feynman. Certainly
            the reminiscences here give a true picture of much of his character
            -- his almost compulsive need to solve puzzles, his provocative
            mischievousness, his indignant impatience with pretension and
            hypocrisy, and his talent for one-upping anybody who tries to one-up
            him! This book is great reading: outrageous, shocking, still warm
            and very human.
          </p>
          <p>
            For all that, it only skirts the keystone of his life: science. We
            see it here and there, as background material in one sketch or
            another, but never as the focus of his existence, which generations
            of his students and colleagues know it to be. Perhaps nothing else
            is possible. There may be no way to construct such a series of
            delightful stories about himself and his work: the challenge and
            frustration, the excitement that caps insight, the deep pleasure of
            scientific understanding that has been the wellspring of happiness
            in his life.
          </p>
          <p>
            I remember when I was his student how it was when you walked into
            one of his lectures. He would be standing in front of the hall
            smiling at us all as we came in, his fingers tapping out a
            complicated rhythm on the black top of the demonstration bench that
            crossed the front of the lecture hall. As latecomers took their
            seats, he picked up the chalk and began spinning it rapidly through
            his fingers in a manner of a professional gambler playing with a
            poker chip, still smiling happily as if at some secret joke. And
            then -- still smiling -- he talked to us about physics, his diagrams
            and equations helping us to share his understanding. It was no
            secret joke that brought the smile and the sparkle in his eye, it
            was physics. The joy of physics! The joy was contagious. We are
            fortunate who caught that infection. Now here is your opportunity to
            be exposed to the joy of life in the style of Feynman.
          </p>
          <Signature
            author="Albert R. Hibbs"
            role="Senior Member of the Technical Staff"
            division="Jet Propulsion Laboratory"
            company="California Institute of Technology"
          />

          <GalleryImage
            src="https://images.unsplash.com/photo-1488388373205-a134c1cc7e4e?dpr=1&auto=compress,format"
            caption="Follow your path"
          />

          <h2>Vitals</h2>
          <p>
            Some facts about my timing: I was born in 1918 in a small town
            called Far Rockaway, right on the outskirts of New York, near the
            sea. I lived there until 1935, when I was seventeen. I went to MIT
            for four years, and then I went to Princeton, in about 1939. During
            the time I was at Princeton I started to work on the Manhattan
            Project, and I ultimately went to Los Alamos in April 1943, until
            something like October or November 1946, when I went to Cornell.
          </p>
          <p>
            I got married to Arlene in 1941, and she died of tuberculosis while
            I was at Los Alamos, in 1946.
          </p>
          <p>
            I was at Cornell until about 1951. I visited Brazil in the summer of
            1949 and spent half a year there in 1951, and then went to Caltech,
            where I've been ever since.
          </p>
          <p>
            I went to Japan at the end of 1951 for a couple of weeks, and then
            again, a year or two later, just after I married my second wife,
            Mary Lou.
          </p>
          <p>
            I am now married to Gweneth, who is English, and we have two
            children, Carl and Michelle.
          </p>
          <Signature author="R. P. F." />

          <Image
            src="https://images.unsplash.com/photo-1487640228478-7a32e30a9e40?dpr=1&auto=compress,format"
            caption="You will find what you seek"
          />
        </article>
      </div>
    );
  }
}

export default App;
