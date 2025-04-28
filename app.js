// Firebaseの設定（あなたの情報）
const firebaseConfig = {
  apiKey: "AIzaSyDsD5uVHdUBjEwW9538pnfJKmcqxpX5nXk",
  authDomain: "kadai-698fe.firebaseapp.com",
  projectId: "kadai-698fe",
  storageBucket: "kadai-698fe.firebasestorage.app",
  messagingSenderId: "567535947359",
  appId: "1:567535947359:web:d1e1088c3e4a96ae6c95ea",
  measurementId: "G-Z05XF4LX2F"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ボタンと表示を取得
const button = document.getElementById('countButton');
const display = document.getElementById('counterDisplay');

// Firestoreのデータにリアルタイムで反応
const ref = db.collection('counter').doc('countData');
ref.onSnapshot(doc => {
  if (doc.exists) {
    display.textContent = doc.data().value;
  }
});

// クリックで＋1して保存
button.addEventListener('click', () => {
  let count = Number(display.textContent) + 1;
  ref.set({ value: count });
});