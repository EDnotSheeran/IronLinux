import { HomePage } from "src/interfaces/HomePage";
export interface IHomePageRepository {
  updateOrCreate(HomePage: HomePage): Promise<HomePage>;
  getLastCreated(): Promise<HomePage>;
}
