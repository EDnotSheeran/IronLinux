import { PrismaClientOptions } from "@prisma/client/runtime";
import { Prisma, PrismaClient } from "prisma/prisma-client";

export class PaginationUtils {
  async pagination(
    pageSize?: number,
    page?: number,
    sort?: string,
    sortField?: string,
    key?: Prisma.ModelName
  ) {
    page = !page ? 0 : page - 1;
    pageSize = !pageSize ? 5 : pageSize;
    sort = ["asc", "desc"].includes(sort) ? sort : "asc";

    const orderBy = sortField.split(",").map((field) => {
      return { [field === "undefined" ? "id" : field]: sort };
    });

    const offset = page * pageSize;

    const { results, total } = await this.PrismaFindManyResults(
      key,
      pageSize,
      offset,
      orderBy
    );
    const { currentPage, totalPages } = this.totalResults(
      total,
      pageSize,
      page
    );

    return {
      results,
      currentPage,
      totalPages,
      totalRecords: results.length,
    };
  }

  private totalResults(totalResults: number, pageSize: number, page: number) {
    return {
      totalPages: Math.ceil(totalResults / pageSize),
      currentPage: page + 1,
    };
  }
  private async PrismaFindManyResults(
    key: Prisma.ModelName,
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ) {
    const prisma = new PrismaClient();
    const keyProperty = key[0].toLowerCase() + key.slice(1);

    // @ts-expect-error
    const results = await prisma[keyProperty].findMany({
      take: pageSize,
      skip: offset,
      orderBy,
    });
    // @ts-expect-error
    const total = await await prisma[keyProperty].count();

    return { results, total };
  }
}
