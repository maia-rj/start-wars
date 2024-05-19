import { useToast } from "application/context/toast";
import { AxiosInstance } from "axios";

export const errorInterceptor = (api: AxiosInstance) => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const { addToast } = useToast();

      if (error.response) {
        const status = error.response.status;
        let message = "Ocorreu um erro.";

        switch (status) {
          case 400:
            message =
              "Requisição inválida. Por favor, verifique os dados enviados.";
            break;
          case 401:
            message = "Não autorizado. Por favor, faça login novamente.";
            break;
          case 403:
            message =
              "Proibido. Você não tem permissão para acessar este recurso.";
            break;
          case 404:
            message = "Recurso não encontrado.";
            break;
          case 500:
            message =
              "Erro interno do servidor. Por favor, tente novamente mais tarde.";
            break;
          case 502:
            message =
              "Bad Gateway. O servidor está temporariamente fora do ar.";
            break;
          case 503:
            message =
              "Serviço indisponível. O servidor está temporariamente fora do ar.";
            break;
          case 504:
            message =
              "Gateway Timeout. O servidor demorou muito para responder.";
            break;
          default:
            message = `Erro: ${status} - ${
              error.response.data.message || error.response.statusText
            }`;
            break;
        }

        addToast(message);
      } else if (error.request) {
        addToast(
          "Erro: Sem resposta do servidor. Por favor, tente novamente mais tarde."
        );
      } else {
        addToast(`Erro: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};
