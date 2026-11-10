import { createMuiTheme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AllInclusive from "@material-ui/icons/AllInclusive";

import {
    constrainedTheme,
    lessConstrainedTheme,
    unconstrainedTheme,
    submitFormTheme,
} from "./components/Theme";
import { Strong } from "./components/Utilies";

const subscribe_link = "https://forms.gle/sVMWx9FHjL4DvK3K8"

const domains = [
    {
        name: "Content",
        description: "Content description",
        tasks: [
            {
                name: "Language Identification",
                description:
                    "Language Identification task is aimed to determine the language spoken in a given speech recording.\
                    Currently, we are using the VoxForge Dataset for this task.",
            },
            {
                name: "Speech Command Recognition",
                description:
                    "Speech Command Recognition aims to identify the spoken command.\
                    Currently, datasets utilized for this task is the Google Speech Commands V1 datset.",
            },
            {
                name: "Speech Detection",
                description:
                    "Speech Detection aims to identify whether the given audio clip contains real speech or not.\
                    Currently, datasets utilized for this task is the LJSpeech dataset, LibriSpeech-TestClean and LibriSpeech-TestOther dataset.",
            },
            {
                name: "Speech Text Matching",
                description:
                    "Speech Text Matching aims to determine if the speech and text are matched.\
                    Currently, datasets utilized for this task is the LJSpeech dataset, LibriSpeech-TestClean and LibriSpeech-TestOther dataset.",
            },
            {
                name: "Spoken Term Detection",
                description:
                    "Spoken Term Detection aims to check for the existence of the given word in the speech.\
                    Currently, datasets utilized for this task is the LJSpeech dataset, LibriSpeech-TestClean and LibriSpeech-TestOther dataset.",
            },
        ],
    },
    {
        name: "Speaker",
        description: "Speaker description",
        tasks: [
            {
                name: "Multi-Speaker Detection",
                description:
                    "MultiSpeaker Detection aims to analyze the speech audio to determine whether there is more than one speaker present in it.\
                    Currently, datasets utilized for this task are the LibriSpeech-TestClean dataset and VCTK Dataset.",
            },
            {
                name: "Speaker Counting",
                description:
                    "Speaker Counting aims to identify the total number of speaker in speech audio.\
                    Currently, datasets utilized for this task is the LibriTTS-TestClean dataset.",
            },
            {
                name: "Speaker Verification",
                description:
                    "Speaker verification aims to verify whether the two given speech audios are from the same speaker.\
                    Currently, datasets utilized for this task is the LibriSpeech-TestClean dataset and the VCTK dataset.",
            },
        ],
    },
    {
        name: "Semantics",
        description: "Semantics description",
        tasks: [
            {
                name: "Dialogue Act Classification",
                description:
                    "Dialogue act classification aims to identify the primary purpose or function of an utterance within its dialogue context.\
                    Currently, the DailyTalk Dataset is the main dataset used for this task.",
            },
            {
                name: "Dialogue Act Pairing",
                description:
                    "Dialogue act pairing involves assessing the congruence of dialogue acts—that is, whether a response dialogue act is appropriate given a query dialogue act.\
                    We use the DailyTalk Dataset in this task.",
            },
            {
                name: "Intent Classification",
                description:
                    "Intent classification aims to identify the actionable item behind a spoken message.\
                    Currently, we utilize the FluentSpeechCommands Dataset for this task.",
            },
            {
                name: "Sarcasm Detection",
                description:
                    "Sarcasm Detection aims to detect if the sarcasm or the irony present in the speech audio.\
                    Currently, datasets utilized for this task is the MUStARD dataset.",
            },
        ],
    },
    {
        name: "Degradation",
        description: "Degradation description",
        tasks: [
            {
                name: "Enhancement Detection",
                description:
                    "Enhancement detection is a task focused on determining whether a given audio has been created or modified by a speech enhancement model.\
                    Currently, the project employs the LibriTTS-TestClean dataset for this task.",
            },
            {
                name: "Noise Detection",
                description:
                    "Noise Detection aims to idenetify if the speech audio is clean or mixed with noises.\
                    Currently, datasets utilized for this task are the LJSpeech dataset and VCTK Dataset , and Musan Dataset provides the noise data.",
            },
            {
                name: "Noise SNR Level Prediction",
                description: "Noise SNR Level Prediction aims to predict the signal-to-noise ratio of the speech audio.\
                Currently, datasets utilized for this task is the VCTK Dataset, and Musan Dataset provides the noise data."
            },
            {
                name: "Reverberation Detection",
                description: "Reverberation Detection aims to detect if the speech audio is clean or mixed with room impulse responses (RIRs) and noises, that is to say reverberation noises.\
                Currently, datasets utilized for this task are the LJSpeech dataset and VCTK dataset , and RIRs Noises dataset provides the reverberation noises."
            },
        ],
    },
    {
        name: "Paralinguistics",
        description: "Paralinguistics description",
        tasks: [
            {
                name: "Accent Classification",
                description:
                    "Accent classification involves the recognition and classification of specific speech accents.\
                    Currently, the AccentDB Extended Dataset is the only dataset utilized for this task.",
            },
            {
                name: "Dialogue Emotion Classification",
                description:
                    "Dialogue emotion classification is a task that assesses an AI model's ability to identify the most suitable emotion in a given dialogue extract.\
                    In this context, we use the DailyTalk Dataset as our primary data source.",
            },
            {
                name: "Emotion Recognition",
                description:
                    "Emotion recognition aims to identify the most appropriate emotional category for a given utterance.\
                    Currently, the Multimodal EmotionLines Dataset is the only dataset utilized for this task.",
            },
            {
                name: "How Far Are You",
                description:
                    "The HowFarAreYou task aims to determine the distance of the speaker from the source of sound. It primarily involves using the 3DSpeaker Dataset.",
            },
            {
                name: "Spoof Detection",
                description:
                    "Spoof Detection aims to classify whether the given utterance is a spoofed voice or an authentic recording.\
                    Currently, datasets utilized for this task is the ASVspoof 2015 dataset and ASVspoof 2017 dataset.",
            },
            {
                name: "Stress Detection",
                description:
                    "Stress Detection aims to determine the stress placement in English vocabulary. Currently, datasets utilized for this task is the MIR-SD dataset.",
            },
        ],
    },
    {
        name: "Audio",
        description: "Audio description",
        tasks: [
            {
                name: "Accent Classification",
                description:
                    "Bird sound detection is an interesting task that aims to identify the presence or absence of bird sounds in a given speech.\
                    The main dataset used for this task is the Warblrb10k Dataset",
            },
            {
                name: "Chord Classification",
                description:
                    "Chord classification is a crucial task for understanding and analyzing music.\
                    This endeavor focuses on determining whether a given tune for piano or guitar is in major or minor key.\
                    Currently, the Acoustic Guitar and Piano Dataset is being used for this task.",
            },
            {
                name: "Environmental Sound Classification",
                description:
                    "Environmental Sound Classification (ESC) focuses on recognizing and classifying sounds that originate from the environment.\
                    At present, the ESC50 Dataset is specifically used for accomplishing this task in the Dynamic-SUPERB benchmark.",
            },
        ],
    },
];

const tracks = [
    {
        name: "constrained",
        rules: (
            <span>
                A fair comparison between{" "}
                <Strong>frozen representations</Strong> by enforcing the same
                downstream model in each task. Only a few hyper-paramters for
                training are allowed to tuned.
            </span>
        ),
        submit: "Make sure to read the rules before submitting.",
        Icon: LockIcon,
        theme: createMuiTheme(constrainedTheme),
    },
    {
        name: "less-constrained",
        rules: (
            <span>
                A comparison between <Strong>frozen representations</Strong>{" "}
                with customized but limited-resource downstream models. The
                details of downstream models are reported along with
                submissions.
            </span>
        ),
        submit: false,
        Icon: LockOpenIcon,
        theme: createMuiTheme(lessConstrainedTheme),
    },
    {
        name: "unconstrained",
        rules: (
            <span>
                The track does not limit any approach for solving SUPERB tasks
                as long as it in principle utilizes only{" "}
                <Strong>a single shared model</Strong> with limited
                task-specific parameters.
            </span>
        ),
        submit: false,
        Icon: AllInclusive,
        theme: createMuiTheme(unconstrainedTheme),
    },
];


const leaderboard_selections = [
    {
        name: "all",
        theme: createMuiTheme(submitFormTheme),
    },
    {
        name: "constrained",
        theme: createMuiTheme(constrainedTheme),
    },
    {
        name: "less-constrained",
        theme: createMuiTheme(lessConstrainedTheme),
    },
    {
        name: "unconstrained",
        theme: createMuiTheme(unconstrainedTheme),
    },
];

const public_hidden_selections = [
    {
        name: "public",
        theme: createMuiTheme(submitFormTheme),
    },
    {
        name: "hidden",
        theme: createMuiTheme(submitFormTheme),
    },
];


const public_task_columnInfo = {
    PR_per_public: {
        header: "PR public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    KS_acc_public: {
        header: "KS public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    IC_acc_public: {
        header: "IC public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SID_acc_public: {
        header: "SID public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ER_acc_public: {
        header: "ER public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold1_acc_public: {
        header: "ER fold1",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold2_acc_public: {
        header: "ER fold2",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold3_acc_public: {
        header: "ER fold3",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold4_acc_public: {
        header: "ER fold4",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold5_acc_public: {
        header: "ER fold5",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ASR_wer_public: {
        header: "ASR public",
        width: 120,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ASR_LM_wer_public: {
        header: "ASR-LM public",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    QbE_mtwv_public: {
        header: "QbE public",
        width: 120,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SF_f1_public: {
        header: "SF-F1 public",
        width: 130,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SF_cer_public: {
        header: "SF-CER public",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SV_eer_public: {
        header: "SV public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SD_der_public: {
        header: "SD public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ST_bleu_public: {
        header: "ST public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_pesq_public: {
        header: "SE-PESQ public",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_stoi_public: {
        header: "SE-STOI public",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SS_sisdri_public: {
        header: "SS public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
}

const hidden_task_columnInfo = {
    PR_per_hidden_dev: {
        header: "PR hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SID_acc_hidden_dev: {
        header: "SID hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ER_acc_hidden_dev: {
        header: "ER hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ASR_wer_hidden_dev: {
        header: "ASR hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    QbE_map_hidden_dev: {
        header: "QbE-MAP hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    QbE_eer_hidden_dev: {
        header: "QbE-EER hidden dev",
        width: 180,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SV_eer_hidden_dev: {
        header: "SV hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SD_der_hidden_dev: {
        header: "SD hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ST_bleu_hidden_dev: {
        header: "ST hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SS_sisdri_hidden_dev: {
        header: "SS hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_stoi_hidden_dev: {
        header: "SE-STOI hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_pesq_hidden_dev: {
        header: "SE-PESQ hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
}

const individual_submission_columnInfo = {
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelURL: {
        header: "Model URL",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    download: {
        header: "Download",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    showOnLeaderboard: {
        header: "Show",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stride: {
        header: "Stride",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    inputFormat: {
        header: "Input Format",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    corpus: {
        header: "Corpus",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramDesc: {
        header: "Parameter Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    fineTunedParam: {
        header: "Fine-tuned parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    taskSpecParam: {
        header: "Task-specific parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    state: {
        header: "State",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stateInfo: {
        header: "State Info",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitUUID: {
        header: "Submission ID",
        width: 300,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    ...public_task_columnInfo,
};

const individual_submission_hidden_columnInfo = {
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    showOnLeaderboard: {
        header: "Show",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    huggingfaceOrganizationName: {
        header: "Organization",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    huggingfaceRepoName: {
        header: "Repository",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    huggingfaceCommonHash: {
        header: "Commit",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    state: {
        header: "State",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stateInfo: {
        header: "State Info",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitUUID: {
        header: "Submission ID",
        width: 300,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    ...hidden_task_columnInfo,
};


const leaderboard_columnInfo = {
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    name: {
        header: "Name",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelURL: {
        header: "URL",
        width: 60,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stride: {
        header: "Stride",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    inputFormat: {
        header: "Input Format",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    corpus: {
        header: "Corpus",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramDesc: {
        header: "Parameter Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    fineTunedParam: {
        header: "Fine-tuned parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    taskSpecParam: {
        header: "Task-specific parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    ...public_task_columnInfo,
};

const leaderboard_hidden_columnInfo = {
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    name: {
        header: "Name",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    ...hidden_task_columnInfo,
};

const reference_points = {
    "PR_per_public": [17.989999999999995, 96.47],
    "KS_acc_public": [41.3826674, 96.66],
    "IC_acc_public": [9.649354219, 98.76],
    "SID_acc_public": [20.058174, 9.03e+01],
    "ER_acc_public": [48.23672168, 67.62],
    "ASR_wer_public": [76.82, 96.38],
    "QbE_mtwv_public": [0.0058, 0.0736].map(item => 100 * item),
    "SF_f1_public": [69.64, 89.81],
    "SF_cer_public": [47.06, 78.24],
    "SV_eer_public": [90.44, 94.89],
    "SD_der_public": [89.95, 94.38],
    "ST_bleu_public": [2.32, 20.01],
    "SE_pesq_public": [2.55, 2.64],
    "SE_stoi_public": [93.6, 94.2],
    "SS_sisdri_public": [9.2341, 10.4514],
    "PR_per_hidden_dev": [0.8100076941, 0.1632352551].map(item => 100 * (1 - item)),
    "SID_acc_hidden_dev": [0.4958333373, 0.7983333468].map(item => 100 * item),
    "ER_acc_hidden_dev": [0.4712328911, 0.6794520617].map(item => 100 * item),
    "ASR_wer_hidden_dev": [0.7356, 0.2149418249].map(item => 100 * (1 - item)),
    "SV_eer_hidden_dev": [0.255671, 0.127294].map(item => 100 * (1 - item)),
    "SD_der_hidden_dev": [0.157551825, 0.1048149392].map(item => 100 * (1 - item)),
    "QbE_map_hidden_dev": [0.1860194802, 0.5108585358].map(item => 100 * item),
    "QbE_eer_hidden_dev": [0.3694903255, 0.1780432165].map(item => 100 * (1 - item)),
    "ST_bleu_hidden_dev": [3.2, 23.33],
    "SS_sisdri_hidden_dev": [4.655592075, 8.082589958],
    "SE_pesq_hidden_dev": [1.510035692, 1.567159144],
    "SE_stoi_hidden_dev": [0.8433188677, 0.8520344653].map(item => 100 * item),
}

const hidden_dev_set = [
    "PR_per_hidden_dev", "SID_acc_hidden_dev", "ER_acc_hidden_dev", "ASR_wer_hidden_dev", "QbE_map_hidden_dev",
    "QbE_eer_hidden_dev", "SV_eer_hidden_dev", "SD_der_hidden_dev", "ST_bleu_hidden_dev",
    "SE_pesq_hidden_dev", "SE_stoi_hidden_dev", "SS_sisdri_hidden_dev",
]

const hidden_test_set = [
    "PR_per_hidden_test", "SID_acc_hidden_test", "ER_acc_hidden_test", "ASR_wer_hidden_test", "QbE_map_hidden_test",
    "QbE_eer_hidden_test", "SV_eer_hidden_test", "SD_der_hidden_test", "ST_bleu_hidden_test",
    "SE_pesq_hidden_test", "SE_stoi_hidden_test", "SS_sisdri_hidden_test",
]

export {
    reference_points,
    subscribe_link,
    domains,
    tracks,
    individual_submission_columnInfo,
    individual_submission_hidden_columnInfo,
    leaderboard_columnInfo,
    leaderboard_hidden_columnInfo,
    leaderboard_selections,
    public_hidden_selections,
    hidden_dev_set,
    hidden_test_set,
};
