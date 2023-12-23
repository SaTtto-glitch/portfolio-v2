import { useEffect, useCallback, useState } from 'react';


export const Modal: React.FC<{ cardType: string; onClick: () => void }> = ({ cardType, onClick }) => {
  const [modalCardType, setModalCardType] = useState('');

  let content;

  switch (cardType) {
    case 'dog':
      content = <DogAppContent />;
      break;
    case 'forum':
      content = <ForumAppContent />;
      break;
    case 'review':
      content = <ReviewAppContent />;
      break;
    default:
      break;
  }



  return (
    <div className="modalWrapper">
      <div id="modal" className="modal" onClick={(event) => event.stopPropagation()}>
        {content}
        <button onClick={onClick}>
          <img src="img/top/close.svg" alt="" />
        </button>
        <div className="nonScroll"></div>
      </div>
    </div>
  );
}

function DogAppContent() {
  return (
    <div>
      <div>
        <p className="card__title">Dogアプリ</p>
        <p className="card__info">
          犬の画像をランダムに生成するアプリ
        </p>
        <p className="card__info">HTML/CSS/JavaScipt/React</p>
      </div>
    </div>
  );
}

function ForumAppContent() {
  return (
    <div>
      <p>掲示板アプリのモーダル内容</p>
      <div className="">
        <p className="card__title">掲示板アプリ</p>
        <p className="card__info">
          作成したスレッドにコメントができるアプリ
        </p>
        <p className="card__info">HTML/CSS/javascipt(React)</p>
      </div>
    </div>
  );
}

function ReviewAppContent() {
  return (
    <div>
      <p>書籍レビューアプリのモーダル内容</p>
      <div>
        <p className="card__title">書籍レビューアプリ</p>
        <p className="card__info">書籍情報と感想を投稿できるアプリ</p>
        <p className="card-caption-info">
          ログイン機能を作成しました。
        </p>
        <p className="card-caption-info">HTML/CSS/javascipt(React)</p>
      </div>
    </div>
  );
}