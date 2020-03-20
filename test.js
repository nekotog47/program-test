'use strict';

(function(window, undefined) {

	let objFamilyTree = {
		name: '家康',
		generation: 1,
		children: [
			{name: '信康'},
			{name: '秀康'},
			{
				name: '秀忠',
				generation: 2,
				children: [
					{
						name: '家光',
						generation: 3,
						children: [
							{
								name: '家綱',
								generation: 4
							},
							{
								name: '綱重',
								children: [
									{
										name: '家宣',
										generation: 6,
										children: [
											{
												name: '家継',
												generation: 7
											}
										]
									},
								]
							},
							{
								name: '綱吉',
								generation: 5
							},
						]
					},
					{name: '忠長'},
					{name: '和子'},
					{name: '正之'}
				]
			},
			{name: '忠輝'},
			{name: '義直'},
			{
				name: '頼信',
				children: [
					{
						name: '光貞',
						children: [
							{
								name: '吉宗',
								generation: 8,
								children: [
									{
										name: '家重',
										generation: 9,
										children: [
											{
												name: '家治',
												generation: 10
											},
											{name: '重好'}
										]
									},
									{
										name: '宗武',
										children: [
											{name: '定信'}
										]
									},
									{
										name: '宗尹',
										children: [
											{
												name: '治済',
												children: [
													{
														name: '家斉',
														generation: 11,
														children: [
															{
																name: '家慶',
																generation: 12,
																children: [
																	{
																		name: '家定',
																		generation: 13
																	}
																]
															}
														]
													},
													{
														name: '斉順',
														children: [
															{
																name: '家茂',
																generation: 14
															}
														]
													}
												]
											},
											{name: '斉敦'},
											{
												name: '斉匡',
												children: [
													{
														name: '慶頼',
														children: [
															{name: '家達'}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: '頼房',
				children: [
					{
						name: '(略)',
						children: [
							{
								name: '斉昭',
								children: [
									{
										name: '慶喜',
										generation: 15
									}
								]
							}
						]
					}
				]
			}
		]
	};




	window.onload = function(){
		testFizzBuzz();
		testDenomination();
		testRecursion();
	};






	function testFizzBuzz() {
		let result = document.querySelector('#question-fizzbuzz .result');
		/**
		 * 出力用HTML
		 */
		let resultHtml = '<ol class="numList">';
		//100までループ
		for(let num = 1; num <= 100; num++) {
			if (num % 3 === 0 && num % 5 === 0) {//3と5の倍数のときはFizzBuzz
				resultHtml += '<li class="num num--fizzBuzz">FizzBuzz</li>';
			} else if(num % 3 === 0) {//3の倍数のときはFizz
				resultHtml += '<li class="num num--fizz">Fizz</li>';
			} else if(num % 5 === 0) {//5の倍数のときはBuzz
				resultHtml += '<li class="num num--buzz">Buzz</li>';
			} else {//それ以外は自身の数
				resultHtml += `<li class="num">${num}</li>`;
			}
		}
		resultHtml += '</ol>';
		result.innerHTML = resultHtml;
	}


	function testDenomination() {
		let result = document.querySelector('#question-denomination .result');
		/**
		 * 計算金額
		 */
		const countNums = [19769,1234,9281];
		/**
		 * 金種計算結果
		 */
		const resultHtml = countNums.map(countNum => {
			return countDenomi(countNum);
		});
		//配列を文字列に変換し結果出力
		result.innerHTML = `<div class="denomiWrap">${resultHtml.join('')}</div>`;
	}
	/**
	 * 金種を計算しHTMLとして出力
	 * @param {number} countNum 金種計算金額
	 * @return {string} resultHtml 金種計算結果HTML
	 */
	const countDenomi = countNum => {
		/**
		 * 金種計算結果HTML
		 */
		let resultHtml = `<dl class="denomi"><div class="denomiCont"><dt class="denomiTtl">${countNum}円</dt><dd class="denomiDesc">枚数</dd></div>`;
		/**
		 * 金種リスト
		 */
		let denomis = {
			yen10000: {
				quant: 10000,
				count: 0
			},
			yen5000: {
				quant: 5000,
				count: 0
			},
			yen1000: {
				quant: 1000,
				count: 0
			},
			yen500: {
				quant: 500,
				count: 0
			},
			yen100: {
				quant: 100,
				count: 0
			},
			yen50: {
				quant: 50,
				count: 0
			},
			yen10: {
				quant: 10,
				count: 0
			},
			yen5: {
				quant: 5,
				count: 0
			},
			yen1: {
				quant: 1,
				count: 0
			}
		}
		//金種分ループ
		for(let key in denomis) {
			//計算金額を金種で割った商が金種の枚数
			denomis[key].count = Math.floor(countNum / denomis[key].quant);
			//計算金額を金種で割ったあまりが残りの金額
			countNum %= denomis[key].quant;
			resultHtml += `<div class="denomiCont"><dt class="denomiTtl">${denomis[key].quant}円</dt><dd class="denomiDesc">${denomis[key].count}枚</dd></div>`;
		}
		resultHtml += `</dl>`;
		return resultHtml;
	}

	function testRecursion() {
		//console.log(objFamilyTree);
		let result = document.querySelector('#question-recursion .result');
		/**
		 * 徳川将軍オブジェクト
		 */
		const generalGeneration = getGeneralGeneration(objFamilyTree);
		/**
		 * 出力用HTML
		 */
		const resultHtml = generalGeneration.map(general => {
			return `<li class="general">第${general.num}代将軍：${general.name}</li>`;
		});
		//配列を文字列にして出力
		result.innerHTML = `<ol class="generalList">${resultHtml.join('')}</ol>`;
	}
	/**
	 * 徳川家系図から将軍を在職順に抜き出す
	 * @param {Object} objFamilyTree 徳川家系図
	 * @retrun {Object} generations 在職順の将軍オブジェクト
	 */
	const getGeneralGeneration = objFamilyTree => {
		/**
		 * 将軍格納用配列
		 */
		const generations = [];
		/**
		 * 自身が将軍なら配列にpush、子がいるか確認し再帰処理
		 * @param {Object} objFamily 徳川家系図
		 */
		const familyWorker = objFamily => {
			//自身が将軍なら
			if(objFamily.generation !== undefined) {
				//配列に代と名前をpush
				generations.push({
					num: objFamily.generation,
					name: objFamily.name
				});
			}
			//子がいるか確認
			for (var key in objFamily) {
				//childrenのみ処理する
				if (key === "children") {
					//childrenで再帰処理
					objFamily[key].forEach(child => {
						familyWorker(child);
					});
				}
			}
		}
		familyWorker(objFamilyTree);
		//代順に並び替え
		generations.sort((a,b) => {
			if(a.num < b.num) return -1;
			if(a.num > b.num) return 1;
			return 0;
		});
		return generations;
	}




})(window);



