//const { Configuration, OpenAIApi } = require('openai');
import OpenAIApi from "openai";

//const configuration = new Configuration({ apikey: "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"});
//const openai = new OpenAIApi (configuration);

const openai = new OpenAIApi ({ apiKey: "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",
                                dangerouslyAllowBrowser: true});

export async function sendMsgToOpenAI(message) {
    const res = await openai.chat.completions.create({
        messages: [{ role: "user", content: message }],
        model: "gpt-3.5-turbo",
        //model: "text-davinci-003",
    });

    //
    //const res = await openai.createCompletion({
    //   model: 'text-davinci-003',
    //    prompt: message,
    //    temperature: 0.7,
    //    max_tokens: 256, 
    //    top_p: 1,
    //    frequency_penalty: 0,
    //    presence_penalty: 0

    //});
    return res.data.choices[0].text;
}