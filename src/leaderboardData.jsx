// model_name:{task1:{instance1:Score, instance2:score},
//            task2:{instance1:score, instance2:score}...}

const raw_data = {
  "BERT-GSLM": {
    SpeechDetection: {
      LJSpeech: 99.66,
      "LibriSpeech-TestClean": 97.48,
      "LibriSpeech-TestOther": 77.57,
    },
    SpeechTextMatching: {
      LJSpeech: 54.11,
      "LibriSpeech-TestClean": 57.82,
      "LibriSpeech-TestOther": 54.02,
    },
    SpokenTermDetection: {
      LJSpeech: 52.6,
      "LibriSpeech-TestClean": 51.45,
      "LibriSpeech-TestOther": 52.36,
    },
    EnhancementDetection: {
      "LibriTTS-TestClean_WHAM": 74.26,
    },
    NoiseDetection: {
      "LJSpeech_MUSAN-Gaussain": 83.17,
      "VCTK-MUSAN-Gaussain": 90.98,
    },
    NoiseSNRLevelPrediction: {
      "VCTK_MUSAN-Gaussian": 46.41,
    },
    ReverberationDetection: {
      "LJSpeech_RirsNoises-SmallRoom": 58.61,
      "VCTK_RirsNoises-SmallRoom": 55.92,
    },
    DialogueEmotionClassification: {
      DailyTalk: 79.7,
    },
    EmotionRecognition: {
      MultimodalEmotionlinesDataset: 0.0,
    },
    SpoofDetection: {
      ASVspoof2015: 88.65,
      ASVspoof2017: 42.57,
    },
    DialogueActClassification: {
      DailyTalk: 45.65,
    },
    DialogueActPairing: {
      DailyTalk: 48.6,
    },
    SpeakerCounting: {
      "LibriTTS-TestClean": 55.45,
    },
    SpeakerVerification: {
      "LibriSpeech-TestClean": 37.25,
      VCTK: 42.36,
    },
  },
  Whisper: {},
  "ImageBind-LLM": {},
  "Whisper-LLM": {},
  "ASR-ChatGPT": {},
};

const raw_data_seen = {
  instances: [
    {
      Instance: "BirdSoundDetection_Warblrb10k",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ChordClassification_AcousticGuitarAndPiano",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "EnvironmentalSoundClassification_ESC50-Animals",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "EnvironmentalSoundClassification_ESC50-ExteriorAndUrbanNoises",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-HumanAndNonSpeechSounds",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-InteriorAndDomesticSounds",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-NaturalSoundscapesAndWaterSounds",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechDetection_LJSpeech",
      "BERT-GSLM": "99.66%",
      Whisper: "99.99%",
      "ImageBind-LLM": "99.75%",
      "Whisper-LLM": "99.99%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "97.48%",
      Whisper: "99.92%",
      "ImageBind-LLM": "89.73%",
      "Whisper-LLM": "99.89%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechDetection_LibriSpeech-TestOther",
      "BERT-GSLM": "77.57%",
      Whisper: "99.73%",
      "ImageBind-LLM": "82.85%",
      "Whisper-LLM": "99.66%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechTextMatching_LJSpeech",
      "BERT-GSLM": "54.11%",
      Whisper: "96.56%",
      "ImageBind-LLM": "51.40%",
      "Whisper-LLM": "80.68%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechTextMatching_LibriSpeech-TestClean",
      "BERT-GSLM": "57.82%",
      Whisper: "91.56%",
      "ImageBind-LLM": "51.53%",
      "Whisper-LLM": "84.77%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechTextMatching_LibriSpeech-TestOther",
      "BERT-GSLM": "54.02%",
      Whisper: "91.19%",
      "ImageBind-LLM": "49.74%",
      "Whisper-LLM": "83.67%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpokenTermDetection_LJSpeech",
      "BERT-GSLM": "52.60%",
      Whisper: "96.32%",
      "ImageBind-LLM": "59.77%",
      "Whisper-LLM": "58.97%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpokenTermDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "51.45%",
      Whisper: "92.44%",
      "ImageBind-LLM": "46.07%",
      "Whisper-LLM": "45.34%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpokenTermDetection_LibriSpeech-TestOther",
      "BERT-GSLM": "52.36%",
      Whisper: "90.03%",
      "ImageBind-LLM": "47.53%",
      "Whisper-LLM": "45.02%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeechCommandRecognition_GoogleSpeechCommandsV1",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "LanguageIdentification_VoxForge",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "EnhancementDetection_LibriTTS-TestClean_WHAM",
      "BERT-GSLM": "74.26%",
      Whisper: "63.30%",
      "ImageBind-LLM": "77.07%",
      "Whisper-LLM": "91.52%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Gaussian",
      "BERT-GSLM": "83.17%",
      Whisper: "84.79%",
      "ImageBind-LLM": "94.03%",
      "Whisper-LLM": "99.66%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_VCTK-MUSAN-Gaussian",
      "BERT-GSLM": "90.98%",
      Whisper: "78.12%",
      "ImageBind-LLM": "95.85%",
      "Whisper-LLM": "98.11%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Music",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Music",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Noise",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Noise",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Speech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Speech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Gaussian",
      "BERT-GSLM": "46.41%",
      Whisper: "35.21%",
      "ImageBind-LLM": "47.66%",
      "Whisper-LLM": "78.95%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Music",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Noise",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Speech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-LargeRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-LargeRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-MediumRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-MediumRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-SmallRoom",
      "BERT-GSLM": "58.61%",
      Whisper: "86.91%",
      "ImageBind-LLM": "71.79%",
      "Whisper-LLM": "89.39%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-SmallRoom",
      "BERT-GSLM": "55.92%",
      Whisper: "78.49%",
      "ImageBind-LLM": "85.47%",
      "Whisper-LLM": "88.44%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "AccentClassification_AccentdbExtended",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "DialogueEmotionClassification_DailyTalk",
      "BERT-GSLM": "79.70%",
      Whisper: "82.45%",
      "ImageBind-LLM": "80.37%",
      "Whisper-LLM": "82.68%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "EmotionRecognition_MultimodalEmotionlinesDataset",
      "BERT-GSLM": "0.00%",
      Whisper: "0.03%",
      "ImageBind-LLM": "12.13%",
      "Whisper-LLM": "11.21%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "HowFarAreYou_3DSpeaker",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "StressDetection_MIRSD",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpoofDetection_ASVspoof2015",
      "BERT-GSLM": "88.65%",
      Whisper: "94.07%",
      "ImageBind-LLM": "94.19%",
      "Whisper-LLM": "97.76%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpoofDetection_ASVspoof2017",
      "BERT-GSLM": "42.57%",
      Whisper: "21.16%",
      "ImageBind-LLM": "52.53%",
      "Whisper-LLM": "73.64%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "DialogueActClassification_DailyTalk",
      "BERT-GSLM": "45.65%",
      Whisper: "59.37%",
      "ImageBind-LLM": "44.37%",
      "Whisper-LLM": "61.06%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Action",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Location",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Object",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SarcasmDetection_Mustard",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "DialogueActPairing_DailyTalk",
      "BERT-GSLM": "48.60%",
      Whisper: "50.36%",
      "ImageBind-LLM": "50.88%",
      "Whisper-LLM": "49.84%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeakerCounting_LibriTTS-TestClean",
      "BERT-GSLM": "55.45%",
      Whisper: "41.65%",
      "ImageBind-LLM": "55.85%",
      "Whisper-LLM": "87.00%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeakerVerification_LibriSpeech-TestClean",
      "BERT-GSLM": "37.25%",
      Whisper: "74.80%",
      "ImageBind-LLM": "17.80%",
      "Whisper-LLM": "97.99%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "SpeakerVerification_VCTK",
      "BERT-GSLM": "42.36%",
      Whisper: "50.20%",
      "ImageBind-LLM": "52.68%",
      "Whisper-LLM": "92.00%",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "MultiSpeakerDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
    {
      Instance: "MultiSpeakerDetection_VCTK",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "",
    },
  ],
};

const raw_data_unseen = {
  instances: [
    {
      Instance: "BirdSoundDetection_Warblrb10k",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "28.29%",
      "Whisper-LLM": "14.67%",
      "ASR-ChatGPT": "14.71%",
    },
    {
      Instance: "ChordClassification_AcousticGuitarAndPiano",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "44.35%",
      "Whisper-LLM": "58.44%",
      "ASR-ChatGPT": "2.79%",
    },
    {
      Instance: "EnvironmentalSoundClassification_ESC50-Animals",
      "BERT-GSLM": "0.00%",
      Whisper: "4.00%",
      "ImageBind-LLM": "73.75%",
      "Whisper-LLM": "11.75%",
      "ASR-ChatGPT": "15.50%",
    },
    {
      Instance: "EnvironmentalSoundClassification_ESC50-ExteriorAndUrbanNoises",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "48.75%",
      "Whisper-LLM": "3.50%",
      "ASR-ChatGPT": "7.00%",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-HumanAndNonSpeechSounds",
      "BERT-GSLM": "0.00%",
      Whisper: "1.75%",
      "ImageBind-LLM": "12.00%",
      "Whisper-LLM": "6.00%",
      "ASR-ChatGPT": "19.50%",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-InteriorAndDomesticSounds",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "20.25%",
      "Whisper-LLM": "7.75%",
      "ASR-ChatGPT": "4.00%",
    },
    {
      Instance:
        "EnvironmentalSoundClassification_ESC50-NaturalSoundscapesAndWaterSounds",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "22.75%",
      "Whisper-LLM": "9.25%",
      "ASR-ChatGPT": "4.75%",
    },
    {
      Instance: "SpeechDetection_LJSpeech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "54.26%",
    },
    {
      Instance: "SpeechDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "55.69%",
    },
    {
      Instance: "SpeechDetection_LibriSpeech-TestOther",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "52.26%",
    },
    {
      Instance: "SpeechTextMatching_LJSpeech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "80.99%",
    },
    {
      Instance: "SpeechTextMatching_LibriSpeech-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "52.18%",
    },
    {
      Instance: "SpeechTextMatching_LibriSpeech-TestOther",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "75.40%",
    },
    {
      Instance: "SpokenTermDetection_LJSpeech",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "48.04%",
    },
    {
      Instance: "SpokenTermDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "79.58%",
    },
    {
      Instance: "SpokenTermDetection_LibriSpeech-TestOther",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "78.73%",
    },
    {
      Instance: "SpeechCommandRecognition_GoogleSpeechCommandsV1",
      "BERT-GSLM": "0.08%",
      Whisper: "8.46%",
      "ImageBind-LLM": "4.31%",
      "Whisper-LLM": "3.90%",
      "ASR-ChatGPT": "41.61%",
    },
    {
      Instance: "LanguageIdentification_VoxForge",
      "BERT-GSLM": "0.00%",
      Whisper: "20.28%",
      "ImageBind-LLM": "26.99%",
      "Whisper-LLM": "13.54%",
      "ASR-ChatGPT": "96.53%",
    },
    {
      Instance: "EnhancementDetection_LibriTTS-TestClean_WHAM",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "63.32%",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Gaussian",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "49.02%",
    },
    {
      Instance: "NoiseDetection_VCTK-MUSAN-Gaussian",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "50.28%",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Music",
      "BERT-GSLM": "60.53%",
      Whisper: "49.46%",
      "ImageBind-LLM": "51.92%",
      "Whisper-LLM": "60.49%",
      "ASR-ChatGPT": "49.62%",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Music",
      "BERT-GSLM": "25.78%",
      Whisper: "49.80%",
      "ImageBind-LLM": "53.34%",
      "Whisper-LLM": "57.99%",
      "ASR-ChatGPT": "49.30%",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Noise",
      "BERT-GSLM": "48.84%",
      Whisper: "50.58%",
      "ImageBind-LLM": "55.29%",
      "Whisper-LLM": "59.01%",
      "ASR-ChatGPT": "49.52%",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Noise",
      "BERT-GSLM": "9.23%",
      Whisper: "51.18%",
      "ImageBind-LLM": "57.08%",
      "Whisper-LLM": "58.26%",
      "ASR-ChatGPT": "49.61%",
    },
    {
      Instance: "NoiseDetection_LJSpeech_MUSAN-Speech",
      "BERT-GSLM": "53.20%",
      Whisper: "49.76%",
      "ImageBind-LLM": "50.21%",
      "Whisper-LLM": "66.68%",
      "ASR-ChatGPT": "49.63%",
    },
    {
      Instance: "NoiseDetection_VCTK_MUSAN-Speech",
      "BERT-GSLM": "19.00%",
      Whisper: "51.45%",
      "ImageBind-LLM": "48.32%",
      "Whisper-LLM": "61.91%",
      "ASR-ChatGPT": "49.96%",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Gaussian",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "19.82%",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Music",
      "BERT-GSLM": "28.99%",
      Whisper: "20.73%",
      "ImageBind-LLM": "17.79%",
      "Whisper-LLM": "20.47%",
      "ASR-ChatGPT": "19.41%",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Noise",
      "BERT-GSLM": "26.83%",
      Whisper: "22.06%",
      "ImageBind-LLM": "21.98%",
      "Whisper-LLM": "22.70%",
      "ASR-ChatGPT": "19.30%",
    },
    {
      Instance: "NoiseSNRLevelPrediction_VCTK_MUSAN-Speech",
      "BERT-GSLM": "19.63%",
      Whisper: "26.39%",
      "ImageBind-LLM": "18.25%",
      "Whisper-LLM": "20.17%",
      "ASR-ChatGPT": "19.18%",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-LargeRoom",
      "BERT-GSLM": "62.56%",
      Whisper: "89.39%",
      "ImageBind-LLM": "43.14%",
      "Whisper-LLM": "89.75%",
      "ASR-ChatGPT": "48.16%",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-LargeRoom",
      "BERT-GSLM": "60.88%",
      Whisper: "85.93%",
      "ImageBind-LLM": "73.14%",
      "Whisper-LLM": "78.80%",
      "ASR-ChatGPT": "47.47%",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-MediumRoom",
      "BERT-GSLM": "67.12%",
      Whisper: "89.12%",
      "ImageBind-LLM": "51.75%",
      "Whisper-LLM": "90.06%",
      "ASR-ChatGPT": "47.87%",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-MediumRoom",
      "BERT-GSLM": "57.74%",
      Whisper: "84.00%",
      "ImageBind-LLM": "77.17%",
      "Whisper-LLM": "80.04%",
      "ASR-ChatGPT": "47.76%",
    },
    {
      Instance: "ReverberationDetection_LJSpeech_RirsNoises-SmallRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "48.26%",
    },
    {
      Instance: "ReverberationDetection_VCTK_RirsNoises-SmallRoom",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "48.00%",
    },
    {
      Instance: "AccentClassification_AccentdbExtended",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "19.08%",
      "Whisper-LLM": "4.33%",
      "ASR-ChatGPT": "6.63%",
    },
    {
      Instance: "DialogueEmotionClassification_DailyTalk",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "57.76%",
    },
    {
      Instance: "EmotionRecognition_MultimodalEmotionlinesDataset",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "50.03%",
    },
    {
      Instance: "HowFarAreYou_3DSpeaker",
      "BERT-GSLM": "0.00%",
      Whisper: "0.00%",
      "ImageBind-LLM": "7.42%",
      "Whisper-LLM": "0.05%",
      "ASR-ChatGPT": "0.50%",
    },
    {
      Instance: "StressDetection_MIRSD",
      "BERT-GSLM": "37.89%",
      Whisper: "25.47%",
      "ImageBind-LLM": "35.20%",
      "Whisper-LLM": "15.52%",
      "ASR-ChatGPT": "15.32%",
    },
    {
      Instance: "SpoofDetection_ASVspoof2015",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "14.75%",
    },
    {
      Instance: "SpoofDetection_ASVspoof2017",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "15.34%",
    },
    {
      Instance: "DialogueActClassification_DailyTalk",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "62.88%",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Action",
      "BERT-GSLM": "0.00%",
      Whisper: "1.28%",
      "ImageBind-LLM": "20.53%",
      "Whisper-LLM": "17.29%",
      "ASR-ChatGPT": "85.67%",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Location",
      "BERT-GSLM": "0.00%",
      Whisper: "1.82%",
      "ImageBind-LLM": "14.30%",
      "Whisper-LLM": "14.94%",
      "ASR-ChatGPT": "83.85%",
    },
    {
      Instance: "IntentClassification_FluentSpeechCommands-Object",
      "BERT-GSLM": "0.00%",
      Whisper: "0.22%",
      "ImageBind-LLM": "13.31%",
      "Whisper-LLM": "4.83%",
      "ASR-ChatGPT": "75.89%",
    },
    {
      Instance: "SarcasmDetection_Mustard",
      "BERT-GSLM": "21.16%",
      Whisper: "51.74%",
      "ImageBind-LLM": "50.72%",
      "Whisper-LLM": "46.52%",
      "ASR-ChatGPT": "64.06%",
    },
    {
      Instance: "DialogueActPairing_DailyTalk",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "47.45%",
    },
    {
      Instance: "SpeakerCounting_LibriTTS-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "19.60%",
    },
    {
      Instance: "SpeakerVerification_LibriSpeech-TestClean",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "45.44%",
    },
    {
      Instance: "SpeakerVerification_VCTK",
      "BERT-GSLM": "",
      Whisper: "",
      "ImageBind-LLM": "",
      "Whisper-LLM": "",
      "ASR-ChatGPT": "42.62%",
    },
    {
      Instance: "MultiSpeakerDetection_LibriSpeech-TestClean",
      "BERT-GSLM": "22.60%",
      Whisper: "56.40%",
      "ImageBind-LLM": "37.55%",
      "Whisper-LLM": "59.25%",
      "ASR-ChatGPT": "46.80%",
    },
    {
      Instance: "MultiSpeakerDetection_VCTK",
      "BERT-GSLM": "42.95%",
      Whisper: "59.65%",
      "ImageBind-LLM": "53.25%",
      "Whisper-LLM": "62.00%",
      "ASR-ChatGPT": "47.25%",
    },
  ],
};

const column_fields = [
  "Model Name",
  "BirdSoundDetection",
  "ChordClassification",
  "EnvironmentalSoundClassification",
  "SpeechDetection",
  "SpeechTextMatching",
  "SpokenTermDetection",
  "SpeechCommandRecognition",
  "LanguageIdentification",
  "EnhancementDetection",
  "NoiseDetection",
  "NoiseSNRLevelPrediction",
  "ReverberationDetection",
  "AccentClassification",
  "DialogueEmotionClassification",
  "EmotionRecognition",
  "HowFarAreYou",
  "StressDetection",
  "SpoofDetection",
  "DialogueActClassification",
  "IntentClassification",
  "SarcasmDetection",
  "DialogueActPairing",
  "SpeakerCounting",
  "SpeakerVerification",
  "MultiSpeakerDetection",
];

const models = [
  "BERT-GSLM",
  "Whisper",
  "ImageBind-LLM",
  "Whisper-LLM",
  "ASR-ChatGPT",
];

// Generate columns based on the data
// field is the 'key' that is used to access the data in the rows
const columns = [];
for (const field of column_fields) {
  const column = {
    field: field,
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "data-grid-header",
  };
  columns.push(column);
}

// Generate rows based on the data
const rows = [];
let idCounter = 1;
for (const model in raw_data) {
  const row = { id: idCounter, "Model Name": model };
  for (const task in raw_data[model]) {
    // Take the average of the scores for each instance under each task
    const instances = Object.keys(raw_data[model][task]);
    let sum = 0;
    for (const instance of instances) {
      sum += raw_data[model][task][instance];
    }
    // round to 2 decimal places
    let score = 0;
    score = Math.round((sum / instances.length) * 100) / 100;
    row[task] = score;
  }
  rows.push(row);
  idCounter++;
}

// Transpose version
// Generate columns based on the data
const columns_transpose = [];
columns_transpose.push({
  field: "Task",
  width: 200,
  headerAlign: "left",
  align: "left",
  headerClassName: "data-grid-header",
});
columns_transpose.push({
  field: "Dataset",
  width: 200,
  headerAlign: "left",
  align: "left",
  headerClassName: "data-grid-header",
});
for (const field of models) {
  const column = {
    field: field,
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: "data-grid-header",
    renderCell: (params) => (
      params.value !== "N/A" ?
      (
      params.row.best === field ?
      <strong>{params.value}</strong>
      :
      <span>{params.value}</span>
      )
      :
      <span style={{color: "#d0d0d0"}}>N/A</span>
    )
  };
  columns_transpose.push(column);
}

const acc_to_float = (acc) => {
  return acc !== "N/A" ? parseFloat(acc.slice(0,-1)) : -1;
}

// Generate rows based on the data
const rows_transpose_seen = [];
const rows_transpose_unseen = [];
const rows_transpose_all = [];
for (let index = 0; index < raw_data_seen.instances.length; index++) {
  const instances_seen = raw_data_seen.instances[index];
  const instances_unseen = raw_data_unseen.instances[index];

  const underscore = instances_seen["Instance"].indexOf("_");
  const task = instances_seen["Instance"].slice(0, underscore);
  const dataset = instances_seen["Instance"].slice(underscore + 1);

  const row_seen = { id: index, Task: task, Dataset: dataset };
  const row_unseen = { id: index, Task: task, Dataset: dataset };
  const row_all = { id: index, Task: task, Dataset: dataset };

  for (const model of models) {
    row_seen[model] = instances_seen[model] || "N/A";
    row_unseen[model] = instances_unseen[model] || "N/A";
    row_all[model] = instances_seen[model] || instances_unseen[model];
  }

  row_seen.best = models.reduce(function(a, b){ return acc_to_float(row_seen[a]) > acc_to_float(row_seen[b]) ? a : b });
  row_unseen.best = models.reduce(function(a, b){ return acc_to_float(row_unseen[a]) > acc_to_float(row_unseen[b]) ? a : b });
  row_all.best = models.reduce(function(a, b){ return acc_to_float(row_all[a]) > acc_to_float(row_all[b]) ? a : b });

  rows_transpose_seen.push(row_seen);
  rows_transpose_unseen.push(row_unseen);
  rows_transpose_all.push(row_all);
}

export {
  columns,
  rows,
  columns_transpose,
  rows_transpose_seen,
  rows_transpose_unseen,
  rows_transpose_all,
};
