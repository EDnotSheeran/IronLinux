import { HomePage } from "../../interfaces/HomePage";

export interface IHomePageService {
  updateOrCreate(HomePage: HomePage): Promise<HomePage>;
  getLast(): Promise<HomePage>;
}
