import './App.css';

function App() {
  return (
    <div className="App">
      <div className='first'>
        <div className='header'></div>
        <div className='slideShow'></div>
        <div className='header'></div>
      </div>
      <div className='explanation'>
        <div className='article'>
          <h1><mark>Kanye West </mark>   </h1>
          <p>
            {"\t"} Kanye Omari West (born June 8, 1977) is an American rapper, singer, songwriter, record producer,
            entrepreneur and fashion designer. His musical career has been marked by dramatic changes in styles,
            incorporating an eclectic range of influences including soul, baroque pop, electro, indie rock, synth-pop,
            industrial and gospel. Over the course of his career, West has been responsible for cultural movements and progressions within mainstream hip hop and popular music at large.
            Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in
            the early 2000s, producing hit singles for recording artists such as Jay-Z, Ludacris and Alicia Keys. Intent
            on pursuing a solo career as a rapper, West released his debut album The College Dropout in 2004 to widespread
            critical and commercial success, and founded the record label GOOD Music. He went on to experiment with a variety
            of musical genres on subsequent acclaimed studio albums, including Late Registration (2005), Graduation (2007),
            and the polarizing but influential 808s & Heartbreak (2008). He released his fifth album My Beautiful Dark Twisted
            Fantasy in 2010 to further rave reviews, and has since succeeded it with Yeezus (2013) , The Life of Pablo (2016) and
            Ye (2018), as well as full-length collaborations Watch the Throne (2011) and Kids See Ghosts (2018) with Jay-Z and Kid
            Cudi respectively.</p>
        </div>
      </div>
      <div className='albums'>
        <h1 id='nice'>Favorite Albums: </h1>
        <div id='order' className='section'>
          <div className='pic' id='myDark'></div>
          <div className='top' id='myDarkText'>
            <h1>My Beautiful Dark Twisted Fantasy </h1>
            <h1>1.Gorgeous</h1>
            <h1>2.Devil In A New Dress</h1>
            <h1>3.POWER</h1>
            <h1>4.Runaway</h1>
            <h1>5.All Of The Lights</h1>
          </div>
        </div>
        <div id='order' className='section'>
          <div className='pic' id='grad'></div>
          <div className='top' id='gradtext'>
            <h1>Graduation </h1>
            <h1>1.Homecoming</h1>
            <h1>2.Flashing Lights</h1>
            <h1>3.Champion</h1>
            <h1>4.I Wonder</h1>
            <h1>5.Good Morning</h1>
          </div>
        </div>
        <div id='order' className='section'>
          <div className='pic' id='late'></div>
          <div className='top' id='latetext'>
            <h1>TOP 5 SONGS : </h1>
            <h1>1.Gorgeous</h1>
            <h1>2.Devil In A New Dress</h1>
            <h1>3.POWER</h1>
            <h1>4.Runaway</h1>
            <h1>5.All Of The Lights</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
