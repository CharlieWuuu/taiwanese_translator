<template>
	<div class="container">
		<h1>翻譯器</h1>
		<div class="translator">
			<!-- 原文輸入框 + 清除按鈕 -->
			<div class="input-group">
				<textarea v-model="inputText" placeholder="輸入要翻譯的文字"></textarea>
				<div class="button_container"> <button @click="translateText" :disabled="loading">
						{{ loading ? "翻譯中..." : "翻譯" }}
					</button>
					<button @click="clearInput">🗑 清除</button>
					<button @click="copyToClipboard(inputText)">📋 複製</button>
				</div>
			</div>


			<!-- 翻譯結果 + 編輯按鈕 -->
			<div class="input-group">
				<textarea :readonly="!isEditingOutput" v-model="outputText" placeholder="翻譯結果"></textarea>
				<div class="button_container">
					<!-- <button @click="toggleEdit('output')">
						{{ isEditingOutput ? "🔒 鎖定" : "✏ 編輯" }}
					</button> -->
					<button @click="copyToClipboard(outputText)">📋 複製</button>
				</div>
			</div>

			<!-- 拼音結果 + 編輯按鈕 -->
			<div class="input-group">
				<textarea :readonly="!isEditingPinyin" v-model="pinyinText" placeholder="拼音結果"></textarea>
				<div class="button_container">
					<button @click="playAudio" :disabled="!outputText || loadingAudio">
						{{ loadingAudio ? "生成語音中..." : "🔊 發音" }}
					</button>
					<!-- <button @click="toggleEdit('pinyin')">
						{{ isEditingPinyin ? "🔒 鎖定" : "✏ 編輯" }}
					</button> -->
					<button @click="copyToClipboard(pinyinText)">📋 複製</button>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			inputText: "",
			outputText: "",
			pinyinText: "",
			isEditingOutput: false,
			isEditingPinyin: false,
			loading: false,
			loadingAudio: false,
			audio: null,
		};
	},
	methods: {
		async translateText() {
			if (!this.inputText.trim()) return;
			this.loading = true;
			this.outputText = "";
			this.pinyinText = "";

			try {
				// 取得翻譯結果
				const response = await axios.get(
					`http://tts001.iptcloud.net:8804/html_taigi_zh_tw?text0=${encodeURIComponent(this.inputText)}`
				);
				this.outputText = response.data || "翻譯失敗";

				// 取得拼音
				this.getPinyin(this.outputText);
			} catch (error) {
				console.error("翻譯 API 錯誤:", error);
				this.outputText = "翻譯錯誤";
			} finally {
				this.loading = false;
			}
		},
		async getPinyin(text) {
			if (!text.trim()) return;

			try {
				const response = await axios.get(
					`http://tts001.iptcloud.net:8804/html_taigi_tw_py?text0=${encodeURIComponent(text)}`
				);
				this.pinyinText = response.data || "拼音取得失敗";
			} catch (error) {
				console.error("拼音 API 錯誤:", error);
				this.pinyinText = "拼音取得錯誤";
			}
		},
		async playAudio() {
			if (!this.outputText.trim()) return;
			this.loadingAudio = true;

			try {
				const audioUrl = `http://tts001.iptcloud.net:8804/synthesize_TLPA?text1=${encodeURIComponent(this.outputText)}&gender=%E5%A5%B3%E8%81%B2&accent=%E5%BC%B7%E5%8B%A2%E8%85%94%EF%BC%88%E9%AB%98%E9%9B%84%E8%85%94%EF%BC%89`;

				if (this.audio) {
					this.audio.pause();
					this.audio = null;
				}

				this.audio = new Audio(audioUrl);
				this.audio.play();
			} catch (error) {
				console.error("語音播放錯誤:", error);
			} finally {
				this.loadingAudio = false;
			}
		},
		copyToClipboard(text) {
			if (!text.trim()) return;
			navigator.clipboard.writeText(text).then(() => {
				alert("已複製到剪貼簿！");
			}).catch(err => {
				console.error("複製失敗:", err);
			});
		},
		clearInput() {
			this.inputText = "";
		},
		toggleEdit(type) {
			if (type === "output") {
				this.isEditingOutput = !this.isEditingOutput;
			} else if (type === "pinyin") {
				this.isEditingPinyin = !this.isEditingPinyin;
			}
		}
	},
};
</script>

<style lang="scss" scoped>
.container {
	text-align: center;
	padding: 20px;

	.translator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;

		.input-group {
			position: relative;
			display: flex;
			align-items: center;
			gap: 5px;
			width: 80%;

			textarea {
				flex-grow: 1;
				height: 100px;
				padding: 10px;
				font-size: 16px;
				border: 1px solid #ccc;
				transition: background 0.3s;

				&:read-only {
					background: #f0f0f0;
					cursor: not-allowed;
					border: none;
				}
			}

			.button_container {
				position: absolute;
				display: flex;
				gap: 5px;
				right: 0.5rem;
				bottom: 0.5rem;

				button {
					padding: 4px 8px;
					font-size: 14px;
					background-color: transparent;
					border: 1px solid #007bff;
					color: gray;
					border-radius: 4px;
					cursor: pointer;

					&:hover:not(:disabled) {
						background-color: #d7eaff;
					}

					&:disabled {
						background-color: #aaa;
						cursor: not-allowed;
					}
				}
			}
		}

		button {
			padding: 10px 20px;
			font-size: 16px;
			background-color: #007bff;
			color: white;
			border: none;
			cursor: pointer;

			&:hover:not(:disabled) {
				background-color: #0056b3;
			}

			&:disabled {
				background-color: #aaa;
				cursor: not-allowed;
			}
		}
	}
}
</style>
