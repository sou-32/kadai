const firebaseConfig = {
  apiKey: "AIzaSyDsD5uVHdUBjEwW9538pnfJKmcqxpX5nXk",
  authDomain: "kadai-698fe.firebaseapp.com",
  projectId: "kadai-698fe",
  storageBucket: "kadai-698fe.firebasestorage.app",
  messagingSenderId: "567535947359",
  appId: "1:567535947359:web:d1e1088c3e4a96ae6c95ea",
  measurementId: "G-Z05XF4LX2F"
};

// Firebaseの初期化
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ボタンとカウント表示を取得
const countButton = document.getElementById('countButton');
const counterDisplay = document.getElementById('counterDisplay');

// Firestoreからカウントを取得
let count = 0;
const countRef = db.collection('counter').doc('countData');

// Firestoreからカウントのデータを取得して表示
countRef.get().then((doc) => {
    if (doc.exists) {
        count = doc.data().value; // Firestoreのカウント値を取得
        counterDisplay.textContent = count; // 表示を更新
    } else {
        console.log("No such document!");
    }
});

// ボタンクリック時にカウントを増やし、Firestoreに保存する
countButton.addEventListener('click', () => {
    count++;  // カウントを1増やす
    counterDisplay.textContent = count;  // 表示を更新

    // Firestoreに新しいカウント値を保存
    countRef.set({
        value: count
    }).then(() => {
        console.log("カウントが保存されました!");
    }).catch((error) => {
        console.error("エラーが発生しました: ", error);
    });
});