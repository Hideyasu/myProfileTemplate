import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="header-logo">
          XX(適当なサイト名)
        </div>
        <div class="header-list">
          <ul>
            <li>自己紹介</li>
            <li>好きなこと</li>
            <li>得意なこと</li>
          </ul>
        </div>
      </div>
      <div class="main">
        <div class="copy-container">
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>XXの世界へようこそ</h2>
        </div>
        
        <div class="contents">
          <h3 class="section-title">お菓子作りの動画</h3>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg" alt="img" />
            <p>チーズケーキ</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg" alt="img" />
            <p>ショートケーキ</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg" alt="img" />
            <p>Ruby</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg" alt="img" />
            <p>Swift</p>
          </div>
        </div>
        <div class="contents">
          <h3 class="section-title">好きなこと</h3>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg" alt="img" />
            <p>お菓子作りの動画</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg" alt="img" />
            <p>PHP</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg" alt="img" />
            <p>Ruby</p>
          </div>
          <div class="contents-item">
            <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg" alt="img" />
            <p>Swift</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-logo">XX(適当なサイト名)</div>
        <div class="footer-list">
          <ul>
            <li>サイト概要</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
