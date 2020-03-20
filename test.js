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
										generation: 14
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
		result.innerHTML = '金種計算問題の出力結果';
	}

	function testRecursion() {
		console.log(objFamilyTree);

		let result = document.querySelector('#question-recursion .result');
		result.innerHTML = '再帰問題の出力結果';
	}




})(window);



