const cocktailList = [
    {
        name: "レモンサワー",
        situation: "home",
        taste: "refreshing",
        condition: "all",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "焼酎 (甲類)", amount: "45ml" },
            { name: "炭酸水", amount: "120ml" },
            { name: "レモン果汁", amount: "15ml" },
            { name: "氷", amount: "グラス一杯分" }
        ],
        comment: "宅飲みの定番。グラスに氷をたっぷり入れ、焼酎、レモン、最後に炭酸水を静かに注いで軽く1回混ぜるのがコツです！"
    },
    {
        name: "ホット・ハニーハイボール",
        situation: "home",
        taste: "sweet",
        condition: "tired",
        image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "ウイスキー", amount: "30ml" },
            { name: "お湯", amount: "120ml" },
            { name: "ハチミツ", amount: "小さじ1〜2" }
        ],
        comment: "ちょっと疲れ気味の夜には、お湯割りのハイボールにハチミツを。カラダの芯からじんわり温まって、疲れをほぐしてくださいね。"
    },
    {
        name: "ハイボール",
        situation: "home",
        taste: "refreshing",
        condition: "all",
        image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "ウイスキー", amount: "30ml" },
            { name: "炭酸水", amount: "120ml" },
            { name: "レモンピール", amount: "お好みで" }
        ],
        comment: "黄金比率は「ウイスキー1：炭酸水4」です。炭酸が抜けないよう、マドラーで氷を上下に1回だけ動かすのが美味しく作る秘訣。"
    },
    {
        name: "カシスウーロン",
        situation: "home",
        taste: "sweet",
        condition: "all",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "カシスリキュール", amount: "30ml" },
            { name: "ウーロン茶", amount: "120ml" }
        ],
        comment: "お家でも作りやすい定番カクテル。ウーロン茶の渋みのおかげで、甘すぎずスッキリまったり飲めます。"
    },
    {
        name: "カルーアミルク",
        situation: "home",
        taste: "sweet",
        condition: "tired",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "カルーア", amount: "30ml" },
            { name: "牛乳", amount: "90ml" }
        ],
        comment: "今日もお疲れ様でした。甘い牛乳ベースのカルーアミルクは、頑張った脳と身体を優しく癒やしてくれますよ。"
    },
    {
        name: "ジントニック",
        situation: "bar",
        taste: "refreshing",
        condition: "all",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "ドライ・ジン", amount: "45ml" },
            { name: "トニックウォーター", amount: "120ml" },
            { name: "カットライム", amount: "1/8個" }
        ],
        comment: "Barの実力がわかると言われる王道カクテル。ライムを絞ってそのままグラスに落とし、爽やかな香りを楽しみましょう。"
    },
    {
        name: "シャンパン・カクテル",
        situation: "bar",
        taste: "sweet",
        condition: "happy",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "シャンパン", amount: "グラスを満たす" },
            { name: "角砂糖", amount: "1個" },
            { name: "アンゴスチュラ・ビターズ", amount: "1ダッシュ" }
        ],
        comment: "良いことがあった夜や、楽しい気分をさらに盛り上げる華やかな一杯。立ち上る泡を見つめながら、素敵な夜を！"
    },
    {
        name: "マティーニ",
        situation: "bar",
        taste: "strong",
        condition: "all",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        ingredients: [
            { name: "ドライ・ジン", amount: "45ml" },
            { name: "ドライ・ベルモット", amount: "15ml" },
            { name: "オリーブ", amount: "1個" }
        ],
        comment: "「カクテルの王様」。度数はかなり高め（30度以上）です。ミキシンググラスで氷と共に素早くステアして作られます。"
    },
    // ★【追加①】Bar向け×甘め×疲れ気味
    {
        name: "アレキサンダー",
        situation: "bar",
        taste: "sweet",
        condition: "tired",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600", // クリーミーなイメージ
        ingredients: [
            { name: "ブランデー", amount: "30ml" },
            { name: "クレーム・ド・カカオ", amount: "15ml" },
            { name: "生クリーム", amount: "15ml" },
            { name: "ナツメグパウダー", amount: "仕上げに少々" }
        ],
        comment: "「カクテルの女王」と呼ばれる、チョコレートのように濃厚で甘い至高の一杯。疲れた身体と心を優しく包み込んでくれますよ。"
    },
    // ★【追加②】Bar向け×甘め×疲れ気味
    {
        name: "シンガポール・スリング",
        situation: "bar",
        taste: "sweet",
        condition: "tired",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600", // 華やかな赤・ピンク系イメージ
        ingredients: [
            { name: "ドライ・ジン", amount: "30ml" },
            { name: "チェリーブランデー", amount: "15ml" },
            { name: "レモンジュース", amount: "15ml" },
            { name: "プレーンソーダ", amount: "適量" }
        ],
        comment: "ラッフルズ・ホテルで生まれた名作。甘酸っぱくフルーティーな味わいが、疲れた脳を心地よくリフレッシュさせてくれます。"
    }
];

const selectionZone = document.querySelector(".selection-zone");
const gachaBtn = document.getElementById("gacha-btn");
const resultCard = document.getElementById("result-card");
const shakerAnimation = document.getElementById("shaker");
const resultContent = document.getElementById("result-content");
const cocktailImgElement = document.getElementById("cocktail-image");

const cocktailName = document.getElementById("cocktail-name");
const cocktailTaste = document.getElementById("cocktail-taste");
const cocktailRecipe = document.getElementById("cocktail-recipe");
const cocktailComment = document.getElementById("cocktail-comment");
const resultTag = document.getElementById("result-tag");

gachaBtn.addEventListener("click", () => {
    const selectedSituation = document.getElementById("situation").value;
    const selectedTaste = document.getElementById("taste").value;
    const selectedCondition = document.getElementById("condition").value;

    const filteredCocktails = cocktailList.filter(item => {
        const matchSituation = (selectedSituation === "all" || item.situation === selectedSituation);
        const matchTaste = (selectedTaste === "all" || item.taste === selectedTaste);
        const matchCondition = (selectedCondition === "all" || item.condition === "all" || item.condition === selectedCondition);
        return matchSituation && matchTaste && matchCondition;
    });

    selectionZone.classList.add("hidden");
    gachaBtn.classList.add("hidden");

    // 前回の修正に基づき、バーテンダーの美麗画像を表示
    cocktailImgElement.src = "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80&w=600";
    cocktailImgElement.style.opacity = "1";

    resultCard.classList.remove("hidden");
    shakerAnimation.classList.remove("hidden");
    resultContent.classList.add("hidden");

    setTimeout(() => {
        if (filteredCocktails.length === 0) {
            cocktailName.textContent = "幻の一杯";
            resultTag.textContent = "ゴメンナサイ";
            cocktailTaste.textContent = "-";
            cocktailRecipe.innerHTML = "該当するお酒がBarの倉庫にありませんでした…";
            cocktailComment.textContent = "条件を少し緩めて、もう一度やり直してみてください。";
            cocktailImgElement.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600";
        } else {
            const randomIndex = Math.floor(Math.random() * filteredCocktails.length);
            const picked = filteredCocktails[randomIndex];

            cocktailImgElement.src = picked.image;
            cocktailName.textContent = picked.name;
            resultTag.textContent = picked.situation === "home" ? "🏠 家飲み向け" : "🍸 Bar向け";
            
            let tasteText = "";
            if (picked.taste === "refreshing") tasteText = "スッキリ・爽快";
            if (picked.taste === "sweet") tasteText = "甘め・フルーティー";
            if (picked.taste === "strong") tasteText = "ガツンと・強め";
            cocktailTaste.textContent = `タイプ：${tasteText}`;
            
            let ingredientsHTML = "<ul style='list-style: none; padding-left: 0;'>";
            picked.ingredients.forEach(ing => {
                ingredientsHTML += `<li style='margin-bottom: 4px; display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 2px; font-size:0.85rem;'>
                    <span>・${ing.name}</span>
                    <span style='color: #e5b37a; font-weight: bold;'>${ing.amount}</span>
                </li>`;
            });
            ingredientsHTML += "</ul>";
            
            cocktailRecipe.innerHTML = ingredientsHTML;
            cocktailComment.textContent = picked.comment;
        }

        shakerAnimation.classList.add("hidden");
        resultContent.classList.remove("hidden");

        if (!document.getElementById("back-btn")) {
            const backBtn = document.createElement("button");
            backBtn.id = "back-btn";
            backBtn.className = "btn";
            backBtn.style.marginTop = "20px";
            backBtn.style.background = "transparent";
            backBtn.style.border = "1px solid #e5b37a";
            backBtn.style.color = "#e5b37a";
            backBtn.textContent = "メニューに戻る";
            
            backBtn.addEventListener("click", () => {
                resultCard.classList.add("hidden");
                selectionZone.classList.remove("hidden");
                gachaBtn.classList.remove("hidden");
                backBtn.remove();
                cocktailImgElement.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600";
            });
            resultContent.appendChild(backBtn);
        }

    }, 2200);
});
