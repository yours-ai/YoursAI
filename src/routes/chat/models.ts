export interface ApiResponse {
  id: string;
  object: string;
  created: string;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
      refusal: null;
    };
    logprobs: null;
    choice: string;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    completion_tokens_details: {
      reasoning_tokens: number;
    };
  };
  system_fingerprint: null;
}
