
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alunos
 * 
 */
export type alunos = $Result.DefaultSelection<Prisma.$alunosPayload>
/**
 * Model cursos
 * 
 */
export type cursos = $Result.DefaultSelection<Prisma.$cursosPayload>
/**
 * Model disciplinas
 * 
 */
export type disciplinas = $Result.DefaultSelection<Prisma.$disciplinasPayload>
/**
 * Model matriculas
 * 
 */
export type matriculas = $Result.DefaultSelection<Prisma.$matriculasPayload>
/**
 * Model notas
 * 
 */
export type notas = $Result.DefaultSelection<Prisma.$notasPayload>
/**
 * Model periodos
 * 
 */
export type periodos = $Result.DefaultSelection<Prisma.$periodosPayload>
/**
 * Model professores
 * 
 */
export type professores = $Result.DefaultSelection<Prisma.$professoresPayload>
/**
 * Model turmas
 * 
 */
export type turmas = $Result.DefaultSelection<Prisma.$turmasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.alunos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alunos
   * const alunos = await prisma.alunos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alunos`: Exposes CRUD operations for the **alunos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.alunos.findMany()
    * ```
    */
  get alunos(): Prisma.alunosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.cursosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplinas`: Exposes CRUD operations for the **disciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplinas.findMany()
    * ```
    */
  get disciplinas(): Prisma.disciplinasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matriculas`: Exposes CRUD operations for the **matriculas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matriculas.findMany()
    * ```
    */
  get matriculas(): Prisma.matriculasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notas`: Exposes CRUD operations for the **notas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notas
    * const notas = await prisma.notas.findMany()
    * ```
    */
  get notas(): Prisma.notasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodos`: Exposes CRUD operations for the **periodos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodos.findMany()
    * ```
    */
  get periodos(): Prisma.periodosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professores`: Exposes CRUD operations for the **professores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professores
    * const professores = await prisma.professores.findMany()
    * ```
    */
  get professores(): Prisma.professoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turmas`: Exposes CRUD operations for the **turmas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turmas.findMany()
    * ```
    */
  get turmas(): Prisma.turmasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    alunos: 'alunos',
    cursos: 'cursos',
    disciplinas: 'disciplinas',
    matriculas: 'matriculas',
    notas: 'notas',
    periodos: 'periodos',
    professores: 'professores',
    turmas: 'turmas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alunos" | "cursos" | "disciplinas" | "matriculas" | "notas" | "periodos" | "professores" | "turmas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alunos: {
        payload: Prisma.$alunosPayload<ExtArgs>
        fields: Prisma.alunosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alunosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alunosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          findFirst: {
            args: Prisma.alunosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alunosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          findMany: {
            args: Prisma.alunosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>[]
          }
          create: {
            args: Prisma.alunosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          createMany: {
            args: Prisma.alunosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alunosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          update: {
            args: Prisma.alunosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          deleteMany: {
            args: Prisma.alunosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alunosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alunosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          aggregate: {
            args: Prisma.AlunosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunos>
          }
          groupBy: {
            args: Prisma.alunosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunosGroupByOutputType>[]
          }
          count: {
            args: Prisma.alunosCountArgs<ExtArgs>
            result: $Utils.Optional<AlunosCountAggregateOutputType> | number
          }
        }
      }
      cursos: {
        payload: Prisma.$cursosPayload<ExtArgs>
        fields: Prisma.cursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findFirst: {
            args: Prisma.cursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findMany: {
            args: Prisma.cursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          create: {
            args: Prisma.cursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          createMany: {
            args: Prisma.cursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          update: {
            args: Prisma.cursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          deleteMany: {
            args: Prisma.cursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.cursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursosCountArgs<ExtArgs>
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      disciplinas: {
        payload: Prisma.$disciplinasPayload<ExtArgs>
        fields: Prisma.disciplinasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disciplinasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disciplinasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          findFirst: {
            args: Prisma.disciplinasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disciplinasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          findMany: {
            args: Prisma.disciplinasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>[]
          }
          create: {
            args: Prisma.disciplinasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          createMany: {
            args: Prisma.disciplinasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.disciplinasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          update: {
            args: Prisma.disciplinasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          deleteMany: {
            args: Prisma.disciplinasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disciplinasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.disciplinasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          aggregate: {
            args: Prisma.DisciplinasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplinas>
          }
          groupBy: {
            args: Prisma.disciplinasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasGroupByOutputType>[]
          }
          count: {
            args: Prisma.disciplinasCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasCountAggregateOutputType> | number
          }
        }
      }
      matriculas: {
        payload: Prisma.$matriculasPayload<ExtArgs>
        fields: Prisma.matriculasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matriculasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matriculasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          findFirst: {
            args: Prisma.matriculasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matriculasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          findMany: {
            args: Prisma.matriculasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>[]
          }
          create: {
            args: Prisma.matriculasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          createMany: {
            args: Prisma.matriculasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.matriculasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          update: {
            args: Prisma.matriculasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          deleteMany: {
            args: Prisma.matriculasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matriculasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.matriculasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matriculasPayload>
          }
          aggregate: {
            args: Prisma.MatriculasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatriculas>
          }
          groupBy: {
            args: Prisma.matriculasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculasGroupByOutputType>[]
          }
          count: {
            args: Prisma.matriculasCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculasCountAggregateOutputType> | number
          }
        }
      }
      notas: {
        payload: Prisma.$notasPayload<ExtArgs>
        fields: Prisma.notasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          findFirst: {
            args: Prisma.notasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          findMany: {
            args: Prisma.notasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>[]
          }
          create: {
            args: Prisma.notasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          createMany: {
            args: Prisma.notasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          update: {
            args: Prisma.notasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          deleteMany: {
            args: Prisma.notasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notasPayload>
          }
          aggregate: {
            args: Prisma.NotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotas>
          }
          groupBy: {
            args: Prisma.notasGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.notasCountArgs<ExtArgs>
            result: $Utils.Optional<NotasCountAggregateOutputType> | number
          }
        }
      }
      periodos: {
        payload: Prisma.$periodosPayload<ExtArgs>
        fields: Prisma.periodosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.periodosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.periodosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          findFirst: {
            args: Prisma.periodosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.periodosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          findMany: {
            args: Prisma.periodosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>[]
          }
          create: {
            args: Prisma.periodosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          createMany: {
            args: Prisma.periodosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.periodosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          update: {
            args: Prisma.periodosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          deleteMany: {
            args: Prisma.periodosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.periodosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.periodosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$periodosPayload>
          }
          aggregate: {
            args: Prisma.PeriodosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodos>
          }
          groupBy: {
            args: Prisma.periodosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodosGroupByOutputType>[]
          }
          count: {
            args: Prisma.periodosCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodosCountAggregateOutputType> | number
          }
        }
      }
      professores: {
        payload: Prisma.$professoresPayload<ExtArgs>
        fields: Prisma.professoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          findFirst: {
            args: Prisma.professoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          findMany: {
            args: Prisma.professoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>[]
          }
          create: {
            args: Prisma.professoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          createMany: {
            args: Prisma.professoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.professoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          update: {
            args: Prisma.professoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          deleteMany: {
            args: Prisma.professoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.professoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          aggregate: {
            args: Prisma.ProfessoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessores>
          }
          groupBy: {
            args: Prisma.professoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.professoresCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessoresCountAggregateOutputType> | number
          }
        }
      }
      turmas: {
        payload: Prisma.$turmasPayload<ExtArgs>
        fields: Prisma.turmasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.turmasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.turmasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          findFirst: {
            args: Prisma.turmasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.turmasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          findMany: {
            args: Prisma.turmasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>[]
          }
          create: {
            args: Prisma.turmasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          createMany: {
            args: Prisma.turmasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.turmasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          update: {
            args: Prisma.turmasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          deleteMany: {
            args: Prisma.turmasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.turmasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.turmasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$turmasPayload>
          }
          aggregate: {
            args: Prisma.TurmasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurmas>
          }
          groupBy: {
            args: Prisma.turmasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmasGroupByOutputType>[]
          }
          count: {
            args: Prisma.turmasCountArgs<ExtArgs>
            result: $Utils.Optional<TurmasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alunos?: alunosOmit
    cursos?: cursosOmit
    disciplinas?: disciplinasOmit
    matriculas?: matriculasOmit
    notas?: notasOmit
    periodos?: periodosOmit
    professores?: professoresOmit
    turmas?: turmasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlunosCountOutputType
   */

  export type AlunosCountOutputType = {
    matriculas: number
    notas: number
  }

  export type AlunosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | AlunosCountOutputTypeCountMatriculasArgs
    notas?: boolean | AlunosCountOutputTypeCountNotasArgs
  }

  // Custom InputTypes
  /**
   * AlunosCountOutputType without action
   */
  export type AlunosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunosCountOutputType
     */
    select?: AlunosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunosCountOutputType without action
   */
  export type AlunosCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matriculasWhereInput
  }

  /**
   * AlunosCountOutputType without action
   */
  export type AlunosCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notasWhereInput
  }


  /**
   * Count Type CursosCountOutputType
   */

  export type CursosCountOutputType = {
    disciplinas: number
    periodos: number
  }

  export type CursosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | CursosCountOutputTypeCountDisciplinasArgs
    periodos?: boolean | CursosCountOutputTypeCountPeriodosArgs
  }

  // Custom InputTypes
  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     */
    select?: CursosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinasWhereInput
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountPeriodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: periodosWhereInput
  }


  /**
   * Count Type DisciplinasCountOutputType
   */

  export type DisciplinasCountOutputType = {
    notas: number
    turmas: number
  }

  export type DisciplinasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | DisciplinasCountOutputTypeCountNotasArgs
    turmas?: boolean | DisciplinasCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinasCountOutputType
     */
    select?: DisciplinasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notasWhereInput
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmasWhereInput
  }


  /**
   * Count Type PeriodosCountOutputType
   */

  export type PeriodosCountOutputType = {
    matriculas: number
    notas: number
    turmas: number
  }

  export type PeriodosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | PeriodosCountOutputTypeCountMatriculasArgs
    notas?: boolean | PeriodosCountOutputTypeCountNotasArgs
    turmas?: boolean | PeriodosCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * PeriodosCountOutputType without action
   */
  export type PeriodosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodosCountOutputType
     */
    select?: PeriodosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodosCountOutputType without action
   */
  export type PeriodosCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matriculasWhereInput
  }

  /**
   * PeriodosCountOutputType without action
   */
  export type PeriodosCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notasWhereInput
  }

  /**
   * PeriodosCountOutputType without action
   */
  export type PeriodosCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmasWhereInput
  }


  /**
   * Count Type ProfessoresCountOutputType
   */

  export type ProfessoresCountOutputType = {
    disciplines: number
  }

  export type ProfessoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplines?: boolean | ProfessoresCountOutputTypeCountDisciplinesArgs
  }

  // Custom InputTypes
  /**
   * ProfessoresCountOutputType without action
   */
  export type ProfessoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessoresCountOutputType
     */
    select?: ProfessoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessoresCountOutputType without action
   */
  export type ProfessoresCountOutputTypeCountDisciplinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alunos
   */

  export type AggregateAlunos = {
    _count: AlunosCountAggregateOutputType | null
    _avg: AlunosAvgAggregateOutputType | null
    _sum: AlunosSumAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  export type AlunosAvgAggregateOutputType = {
    id: number | null
  }

  export type AlunosSumAggregateOutputType = {
    id: number | null
  }

  export type AlunosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlunosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlunosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AlunosAvgAggregateInputType = {
    id?: true
  }

  export type AlunosSumAggregateInputType = {
    id?: true
  }

  export type AlunosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type AlunosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type AlunosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AlunosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunos to aggregate.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alunos
    **/
    _count?: true | AlunosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunosMaxAggregateInputType
  }

  export type GetAlunosAggregateType<T extends AlunosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunos[P]>
      : GetScalarType<T[P], AggregateAlunos[P]>
  }




  export type alunosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunosWhereInput
    orderBy?: alunosOrderByWithAggregationInput | alunosOrderByWithAggregationInput[]
    by: AlunosScalarFieldEnum[] | AlunosScalarFieldEnum
    having?: alunosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunosCountAggregateInputType | true
    _avg?: AlunosAvgAggregateInputType
    _sum?: AlunosSumAggregateInputType
    _min?: AlunosMinAggregateInputType
    _max?: AlunosMaxAggregateInputType
  }

  export type AlunosGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AlunosCountAggregateOutputType | null
    _avg: AlunosAvgAggregateOutputType | null
    _sum: AlunosSumAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  type GetAlunosGroupByPayload<T extends alunosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunosGroupByOutputType[P]>
            : GetScalarType<T[P], AlunosGroupByOutputType[P]>
        }
      >
    >


  export type alunosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    matriculas?: boolean | alunos$matriculasArgs<ExtArgs>
    notas?: boolean | alunos$notasArgs<ExtArgs>
    _count?: boolean | AlunosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunos"]>



  export type alunosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type alunosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "created_at" | "updated_at", ExtArgs["result"]["alunos"]>
  export type alunosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | alunos$matriculasArgs<ExtArgs>
    notas?: boolean | alunos$notasArgs<ExtArgs>
    _count?: boolean | AlunosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $alunosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alunos"
    objects: {
      matriculas: Prisma.$matriculasPayload<ExtArgs>[]
      notas: Prisma.$notasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["alunos"]>
    composites: {}
  }

  type alunosGetPayload<S extends boolean | null | undefined | alunosDefaultArgs> = $Result.GetResult<Prisma.$alunosPayload, S>

  type alunosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alunosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunosCountAggregateInputType | true
    }

  export interface alunosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alunos'], meta: { name: 'alunos' } }
    /**
     * Find zero or one Alunos that matches the filter.
     * @param {alunosFindUniqueArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alunosFindUniqueArgs>(args: SelectSubset<T, alunosFindUniqueArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alunos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alunosFindUniqueOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alunosFindUniqueOrThrowArgs>(args: SelectSubset<T, alunosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alunosFindFirstArgs>(args?: SelectSubset<T, alunosFindFirstArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alunos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alunosFindFirstOrThrowArgs>(args?: SelectSubset<T, alunosFindFirstOrThrowArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.alunos.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.alunos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunosWithIdOnly = await prisma.alunos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alunosFindManyArgs>(args?: SelectSubset<T, alunosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alunos.
     * @param {alunosCreateArgs} args - Arguments to create a Alunos.
     * @example
     * // Create one Alunos
     * const Alunos = await prisma.alunos.create({
     *   data: {
     *     // ... data to create a Alunos
     *   }
     * })
     * 
     */
    create<T extends alunosCreateArgs>(args: SelectSubset<T, alunosCreateArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {alunosCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const alunos = await prisma.alunos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alunosCreateManyArgs>(args?: SelectSubset<T, alunosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alunos.
     * @param {alunosDeleteArgs} args - Arguments to delete one Alunos.
     * @example
     * // Delete one Alunos
     * const Alunos = await prisma.alunos.delete({
     *   where: {
     *     // ... filter to delete one Alunos
     *   }
     * })
     * 
     */
    delete<T extends alunosDeleteArgs>(args: SelectSubset<T, alunosDeleteArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alunos.
     * @param {alunosUpdateArgs} args - Arguments to update one Alunos.
     * @example
     * // Update one Alunos
     * const alunos = await prisma.alunos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alunosUpdateArgs>(args: SelectSubset<T, alunosUpdateArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {alunosDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.alunos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alunosDeleteManyArgs>(args?: SelectSubset<T, alunosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const alunos = await prisma.alunos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alunosUpdateManyArgs>(args: SelectSubset<T, alunosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alunos.
     * @param {alunosUpsertArgs} args - Arguments to update or create a Alunos.
     * @example
     * // Update or create a Alunos
     * const alunos = await prisma.alunos.upsert({
     *   create: {
     *     // ... data to create a Alunos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alunos we want to update
     *   }
     * })
     */
    upsert<T extends alunosUpsertArgs>(args: SelectSubset<T, alunosUpsertArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.alunos.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends alunosCountArgs>(
      args?: Subset<T, alunosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunosAggregateArgs>(args: Subset<T, AlunosAggregateArgs>): Prisma.PrismaPromise<GetAlunosAggregateType<T>>

    /**
     * Group by Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alunosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alunosGroupByArgs['orderBy'] }
        : { orderBy?: alunosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alunosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alunos model
   */
  readonly fields: alunosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alunos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alunosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matriculas<T extends alunos$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, alunos$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notas<T extends alunos$notasArgs<ExtArgs> = {}>(args?: Subset<T, alunos$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alunos model
   */
  interface alunosFieldRefs {
    readonly id: FieldRef<"alunos", 'Int'>
    readonly nome: FieldRef<"alunos", 'String'>
    readonly email: FieldRef<"alunos", 'String'>
    readonly created_at: FieldRef<"alunos", 'DateTime'>
    readonly updated_at: FieldRef<"alunos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * alunos findUnique
   */
  export type alunosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where: alunosWhereUniqueInput
  }

  /**
   * alunos findUniqueOrThrow
   */
  export type alunosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where: alunosWhereUniqueInput
  }

  /**
   * alunos findFirst
   */
  export type alunosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }

  /**
   * alunos findFirstOrThrow
   */
  export type alunosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }

  /**
   * alunos findMany
   */
  export type alunosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }

  /**
   * alunos create
   */
  export type alunosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * The data needed to create a alunos.
     */
    data: XOR<alunosCreateInput, alunosUncheckedCreateInput>
  }

  /**
   * alunos createMany
   */
  export type alunosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alunos.
     */
    data: alunosCreateManyInput | alunosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alunos update
   */
  export type alunosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * The data needed to update a alunos.
     */
    data: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
    /**
     * Choose, which alunos to update.
     */
    where: alunosWhereUniqueInput
  }

  /**
   * alunos updateMany
   */
  export type alunosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alunos.
     */
    data: XOR<alunosUpdateManyMutationInput, alunosUncheckedUpdateManyInput>
    /**
     * Filter which alunos to update
     */
    where?: alunosWhereInput
    /**
     * Limit how many alunos to update.
     */
    limit?: number
  }

  /**
   * alunos upsert
   */
  export type alunosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * The filter to search for the alunos to update in case it exists.
     */
    where: alunosWhereUniqueInput
    /**
     * In case the alunos found by the `where` argument doesn't exist, create a new alunos with this data.
     */
    create: XOR<alunosCreateInput, alunosUncheckedCreateInput>
    /**
     * In case the alunos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
  }

  /**
   * alunos delete
   */
  export type alunosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
    /**
     * Filter which alunos to delete.
     */
    where: alunosWhereUniqueInput
  }

  /**
   * alunos deleteMany
   */
  export type alunosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunos to delete
     */
    where?: alunosWhereInput
    /**
     * Limit how many alunos to delete.
     */
    limit?: number
  }

  /**
   * alunos.matriculas
   */
  export type alunos$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    where?: matriculasWhereInput
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    cursor?: matriculasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculasScalarFieldEnum | MatriculasScalarFieldEnum[]
  }

  /**
   * alunos.notas
   */
  export type alunos$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    where?: notasWhereInput
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    cursor?: notasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * alunos without action
   */
  export type alunosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alunos
     */
    omit?: alunosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alunosInclude<ExtArgs> | null
  }


  /**
   * Model cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    id: number | null
  }

  export type CursosSumAggregateOutputType = {
    id: number | null
  }

  export type CursosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CursosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CursosCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    id?: true
  }

  export type CursosSumAggregateInputType = {
    id?: true
  }

  export type CursosMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    updated_at?: true
  }

  export type CursosMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    updated_at?: true
  }

  export type CursosCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to aggregate.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type cursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursosWhereInput
    orderBy?: cursosOrderByWithAggregationInput | cursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends cursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type cursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
    disciplinas?: boolean | cursos$disciplinasArgs<ExtArgs>
    periodos?: boolean | cursos$periodosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursos"]>



  export type cursosSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cursosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "created_at" | "updated_at", ExtArgs["result"]["cursos"]>
  export type cursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | cursos$disciplinasArgs<ExtArgs>
    periodos?: boolean | cursos$periodosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cursos"
    objects: {
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>[]
      periodos: Prisma.$periodosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }

  type cursosGetPayload<S extends boolean | null | undefined | cursosDefaultArgs> = $Result.GetResult<Prisma.$cursosPayload, S>

  type cursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface cursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cursos'], meta: { name: 'cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {cursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursosFindUniqueArgs>(args: SelectSubset<T, cursosFindUniqueArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursosFindUniqueOrThrowArgs>(args: SelectSubset<T, cursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursosFindFirstArgs>(args?: SelectSubset<T, cursosFindFirstArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursosFindFirstOrThrowArgs>(args?: SelectSubset<T, cursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursosWithIdOnly = await prisma.cursos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cursosFindManyArgs>(args?: SelectSubset<T, cursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursos.
     * @param {cursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
     */
    create<T extends cursosCreateArgs>(args: SelectSubset<T, cursosCreateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursosCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursosCreateManyArgs>(args?: SelectSubset<T, cursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cursos.
     * @param {cursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
     */
    delete<T extends cursosDeleteArgs>(args: SelectSubset<T, cursosDeleteArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursos.
     * @param {cursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursosUpdateArgs>(args: SelectSubset<T, cursosUpdateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursosDeleteManyArgs>(args?: SelectSubset<T, cursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursosUpdateManyArgs>(args: SelectSubset<T, cursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursos.
     * @param {cursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
     */
    upsert<T extends cursosUpsertArgs>(args: SelectSubset<T, cursosUpsertArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursosCountArgs>(
      args?: Subset<T, cursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursosGroupByArgs['orderBy'] }
        : { orderBy?: cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cursos model
   */
  readonly fields: cursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplinas<T extends cursos$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, cursos$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    periodos<T extends cursos$periodosArgs<ExtArgs> = {}>(args?: Subset<T, cursos$periodosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cursos model
   */
  interface cursosFieldRefs {
    readonly id: FieldRef<"cursos", 'Int'>
    readonly nome: FieldRef<"cursos", 'String'>
    readonly descricao: FieldRef<"cursos", 'String'>
    readonly created_at: FieldRef<"cursos", 'DateTime'>
    readonly updated_at: FieldRef<"cursos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cursos findUnique
   */
  export type cursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findUniqueOrThrow
   */
  export type cursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findFirst
   */
  export type cursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findFirstOrThrow
   */
  export type cursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findMany
   */
  export type cursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos create
   */
  export type cursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to create a cursos.
     */
    data: XOR<cursosCreateInput, cursosUncheckedCreateInput>
  }

  /**
   * cursos createMany
   */
  export type cursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursosCreateManyInput | cursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cursos update
   */
  export type cursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to update a cursos.
     */
    data: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
    /**
     * Choose, which cursos to update.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos updateMany
   */
  export type cursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * cursos upsert
   */
  export type cursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The filter to search for the cursos to update in case it exists.
     */
    where: cursosWhereUniqueInput
    /**
     * In case the cursos found by the `where` argument doesn't exist, create a new cursos with this data.
     */
    create: XOR<cursosCreateInput, cursosUncheckedCreateInput>
    /**
     * In case the cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
  }

  /**
   * cursos delete
   */
  export type cursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter which cursos to delete.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos deleteMany
   */
  export type cursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * cursos.disciplinas
   */
  export type cursos$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    where?: disciplinasWhereInput
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    cursor?: disciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * cursos.periodos
   */
  export type cursos$periodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    where?: periodosWhereInput
    orderBy?: periodosOrderByWithRelationInput | periodosOrderByWithRelationInput[]
    cursor?: periodosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeriodosScalarFieldEnum | PeriodosScalarFieldEnum[]
  }

  /**
   * cursos without action
   */
  export type cursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
  }


  /**
   * Model disciplinas
   */

  export type AggregateDisciplinas = {
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  export type DisciplinasAvgAggregateOutputType = {
    id: number | null
    curso_id: number | null
    professor_id: number | null
  }

  export type DisciplinasSumAggregateOutputType = {
    id: number | null
    curso_id: number | null
    professor_id: number | null
  }

  export type DisciplinasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    curso_id: number | null
    professor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DisciplinasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    curso_id: number | null
    professor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DisciplinasCountAggregateOutputType = {
    id: number
    nome: number
    curso_id: number
    professor_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DisciplinasAvgAggregateInputType = {
    id?: true
    curso_id?: true
    professor_id?: true
  }

  export type DisciplinasSumAggregateInputType = {
    id?: true
    curso_id?: true
    professor_id?: true
  }

  export type DisciplinasMinAggregateInputType = {
    id?: true
    nome?: true
    curso_id?: true
    professor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DisciplinasMaxAggregateInputType = {
    id?: true
    nome?: true
    curso_id?: true
    professor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DisciplinasCountAggregateInputType = {
    id?: true
    nome?: true
    curso_id?: true
    professor_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DisciplinasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to aggregate.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinas
    **/
    _count?: true | DisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinasMaxAggregateInputType
  }

  export type GetDisciplinasAggregateType<T extends DisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplinas[P]>
      : GetScalarType<T[P], AggregateDisciplinas[P]>
  }




  export type disciplinasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinasWhereInput
    orderBy?: disciplinasOrderByWithAggregationInput | disciplinasOrderByWithAggregationInput[]
    by: DisciplinasScalarFieldEnum[] | DisciplinasScalarFieldEnum
    having?: disciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinasCountAggregateInputType | true
    _avg?: DisciplinasAvgAggregateInputType
    _sum?: DisciplinasSumAggregateInputType
    _min?: DisciplinasMinAggregateInputType
    _max?: DisciplinasMaxAggregateInputType
  }

  export type DisciplinasGroupByOutputType = {
    id: number
    nome: string
    curso_id: number
    professor_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  type GetDisciplinasGroupByPayload<T extends disciplinasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type disciplinasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    curso_id?: boolean
    professor_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    professores?: boolean | disciplinas$professoresArgs<ExtArgs>
    notas?: boolean | disciplinas$notasArgs<ExtArgs>
    turmas?: boolean | disciplinas$turmasArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplinas"]>



  export type disciplinasSelectScalar = {
    id?: boolean
    nome?: boolean
    curso_id?: boolean
    professor_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type disciplinasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "curso_id" | "professor_id" | "created_at" | "updated_at", ExtArgs["result"]["disciplinas"]>
  export type disciplinasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    professores?: boolean | disciplinas$professoresArgs<ExtArgs>
    notas?: boolean | disciplinas$notasArgs<ExtArgs>
    turmas?: boolean | disciplinas$turmasArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $disciplinasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disciplinas"
    objects: {
      cursos: Prisma.$cursosPayload<ExtArgs>
      professores: Prisma.$professoresPayload<ExtArgs> | null
      notas: Prisma.$notasPayload<ExtArgs>[]
      turmas: Prisma.$turmasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      curso_id: number
      professor_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["disciplinas"]>
    composites: {}
  }

  type disciplinasGetPayload<S extends boolean | null | undefined | disciplinasDefaultArgs> = $Result.GetResult<Prisma.$disciplinasPayload, S>

  type disciplinasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disciplinasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinasCountAggregateInputType | true
    }

  export interface disciplinasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disciplinas'], meta: { name: 'disciplinas' } }
    /**
     * Find zero or one Disciplinas that matches the filter.
     * @param {disciplinasFindUniqueArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disciplinasFindUniqueArgs>(args: SelectSubset<T, disciplinasFindUniqueArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplinas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disciplinasFindUniqueOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disciplinasFindUniqueOrThrowArgs>(args: SelectSubset<T, disciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disciplinasFindFirstArgs>(args?: SelectSubset<T, disciplinasFindFirstArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplinas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disciplinasFindFirstOrThrowArgs>(args?: SelectSubset<T, disciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinasWithIdOnly = await prisma.disciplinas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends disciplinasFindManyArgs>(args?: SelectSubset<T, disciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplinas.
     * @param {disciplinasCreateArgs} args - Arguments to create a Disciplinas.
     * @example
     * // Create one Disciplinas
     * const Disciplinas = await prisma.disciplinas.create({
     *   data: {
     *     // ... data to create a Disciplinas
     *   }
     * })
     * 
     */
    create<T extends disciplinasCreateArgs>(args: SelectSubset<T, disciplinasCreateArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {disciplinasCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplinas = await prisma.disciplinas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disciplinasCreateManyArgs>(args?: SelectSubset<T, disciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplinas.
     * @param {disciplinasDeleteArgs} args - Arguments to delete one Disciplinas.
     * @example
     * // Delete one Disciplinas
     * const Disciplinas = await prisma.disciplinas.delete({
     *   where: {
     *     // ... filter to delete one Disciplinas
     *   }
     * })
     * 
     */
    delete<T extends disciplinasDeleteArgs>(args: SelectSubset<T, disciplinasDeleteArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplinas.
     * @param {disciplinasUpdateArgs} args - Arguments to update one Disciplinas.
     * @example
     * // Update one Disciplinas
     * const disciplinas = await prisma.disciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends disciplinasUpdateArgs>(args: SelectSubset<T, disciplinasUpdateArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {disciplinasDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disciplinasDeleteManyArgs>(args?: SelectSubset<T, disciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplinas = await prisma.disciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends disciplinasUpdateManyArgs>(args: SelectSubset<T, disciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplinas.
     * @param {disciplinasUpsertArgs} args - Arguments to update or create a Disciplinas.
     * @example
     * // Update or create a Disciplinas
     * const disciplinas = await prisma.disciplinas.upsert({
     *   create: {
     *     // ... data to create a Disciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplinas we want to update
     *   }
     * })
     */
    upsert<T extends disciplinasUpsertArgs>(args: SelectSubset<T, disciplinasUpsertArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplinas.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends disciplinasCountArgs>(
      args?: Subset<T, disciplinasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinasAggregateArgs>(args: Subset<T, DisciplinasAggregateArgs>): Prisma.PrismaPromise<GetDisciplinasAggregateType<T>>

    /**
     * Group by Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends disciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disciplinasGroupByArgs['orderBy'] }
        : { orderBy?: disciplinasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, disciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disciplinas model
   */
  readonly fields: disciplinasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disciplinasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends cursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursosDefaultArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professores<T extends disciplinas$professoresArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$professoresArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notas<T extends disciplinas$notasArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turmas<T extends disciplinas$turmasArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the disciplinas model
   */
  interface disciplinasFieldRefs {
    readonly id: FieldRef<"disciplinas", 'Int'>
    readonly nome: FieldRef<"disciplinas", 'String'>
    readonly curso_id: FieldRef<"disciplinas", 'Int'>
    readonly professor_id: FieldRef<"disciplinas", 'Int'>
    readonly created_at: FieldRef<"disciplinas", 'DateTime'>
    readonly updated_at: FieldRef<"disciplinas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * disciplinas findUnique
   */
  export type disciplinasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas findUniqueOrThrow
   */
  export type disciplinasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas findFirst
   */
  export type disciplinasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas findFirstOrThrow
   */
  export type disciplinasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas findMany
   */
  export type disciplinasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas create
   */
  export type disciplinasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The data needed to create a disciplinas.
     */
    data: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
  }

  /**
   * disciplinas createMany
   */
  export type disciplinasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disciplinas.
     */
    data: disciplinasCreateManyInput | disciplinasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disciplinas update
   */
  export type disciplinasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The data needed to update a disciplinas.
     */
    data: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
    /**
     * Choose, which disciplinas to update.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas updateMany
   */
  export type disciplinasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disciplinas.
     */
    data: XOR<disciplinasUpdateManyMutationInput, disciplinasUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     */
    where?: disciplinasWhereInput
    /**
     * Limit how many disciplinas to update.
     */
    limit?: number
  }

  /**
   * disciplinas upsert
   */
  export type disciplinasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The filter to search for the disciplinas to update in case it exists.
     */
    where: disciplinasWhereUniqueInput
    /**
     * In case the disciplinas found by the `where` argument doesn't exist, create a new disciplinas with this data.
     */
    create: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
    /**
     * In case the disciplinas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
  }

  /**
   * disciplinas delete
   */
  export type disciplinasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter which disciplinas to delete.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas deleteMany
   */
  export type disciplinasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to delete
     */
    where?: disciplinasWhereInput
    /**
     * Limit how many disciplinas to delete.
     */
    limit?: number
  }

  /**
   * disciplinas.professores
   */
  export type disciplinas$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    where?: professoresWhereInput
  }

  /**
   * disciplinas.notas
   */
  export type disciplinas$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    where?: notasWhereInput
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    cursor?: notasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * disciplinas.turmas
   */
  export type disciplinas$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    where?: turmasWhereInput
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    cursor?: turmasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmasScalarFieldEnum | TurmasScalarFieldEnum[]
  }

  /**
   * disciplinas without action
   */
  export type disciplinasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
  }


  /**
   * Model matriculas
   */

  export type AggregateMatriculas = {
    _count: MatriculasCountAggregateOutputType | null
    _avg: MatriculasAvgAggregateOutputType | null
    _sum: MatriculasSumAggregateOutputType | null
    _min: MatriculasMinAggregateOutputType | null
    _max: MatriculasMaxAggregateOutputType | null
  }

  export type MatriculasAvgAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    periodo_id: number | null
  }

  export type MatriculasSumAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    periodo_id: number | null
  }

  export type MatriculasMinAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    periodo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MatriculasMaxAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    periodo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MatriculasCountAggregateOutputType = {
    id: number
    aluno_id: number
    periodo_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MatriculasAvgAggregateInputType = {
    id?: true
    aluno_id?: true
    periodo_id?: true
  }

  export type MatriculasSumAggregateInputType = {
    id?: true
    aluno_id?: true
    periodo_id?: true
  }

  export type MatriculasMinAggregateInputType = {
    id?: true
    aluno_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MatriculasMaxAggregateInputType = {
    id?: true
    aluno_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MatriculasCountAggregateInputType = {
    id?: true
    aluno_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MatriculasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matriculas to aggregate.
     */
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     */
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matriculas
    **/
    _count?: true | MatriculasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculasMaxAggregateInputType
  }

  export type GetMatriculasAggregateType<T extends MatriculasAggregateArgs> = {
        [P in keyof T & keyof AggregateMatriculas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatriculas[P]>
      : GetScalarType<T[P], AggregateMatriculas[P]>
  }




  export type matriculasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matriculasWhereInput
    orderBy?: matriculasOrderByWithAggregationInput | matriculasOrderByWithAggregationInput[]
    by: MatriculasScalarFieldEnum[] | MatriculasScalarFieldEnum
    having?: matriculasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculasCountAggregateInputType | true
    _avg?: MatriculasAvgAggregateInputType
    _sum?: MatriculasSumAggregateInputType
    _min?: MatriculasMinAggregateInputType
    _max?: MatriculasMaxAggregateInputType
  }

  export type MatriculasGroupByOutputType = {
    id: number
    aluno_id: number
    periodo_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: MatriculasCountAggregateOutputType | null
    _avg: MatriculasAvgAggregateOutputType | null
    _sum: MatriculasSumAggregateOutputType | null
    _min: MatriculasMinAggregateOutputType | null
    _max: MatriculasMaxAggregateOutputType | null
  }

  type GetMatriculasGroupByPayload<T extends matriculasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculasGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculasGroupByOutputType[P]>
        }
      >
    >


  export type matriculasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aluno_id?: boolean
    periodo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    alunos?: boolean | alunosDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matriculas"]>



  export type matriculasSelectScalar = {
    id?: boolean
    aluno_id?: boolean
    periodo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type matriculasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aluno_id" | "periodo_id" | "created_at" | "updated_at", ExtArgs["result"]["matriculas"]>
  export type matriculasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | alunosDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }

  export type $matriculasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "matriculas"
    objects: {
      alunos: Prisma.$alunosPayload<ExtArgs>
      periodos: Prisma.$periodosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aluno_id: number
      periodo_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["matriculas"]>
    composites: {}
  }

  type matriculasGetPayload<S extends boolean | null | undefined | matriculasDefaultArgs> = $Result.GetResult<Prisma.$matriculasPayload, S>

  type matriculasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matriculasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatriculasCountAggregateInputType | true
    }

  export interface matriculasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['matriculas'], meta: { name: 'matriculas' } }
    /**
     * Find zero or one Matriculas that matches the filter.
     * @param {matriculasFindUniqueArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matriculasFindUniqueArgs>(args: SelectSubset<T, matriculasFindUniqueArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matriculas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matriculasFindUniqueOrThrowArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matriculasFindUniqueOrThrowArgs>(args: SelectSubset<T, matriculasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindFirstArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matriculasFindFirstArgs>(args?: SelectSubset<T, matriculasFindFirstArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matriculas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindFirstOrThrowArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matriculasFindFirstOrThrowArgs>(args?: SelectSubset<T, matriculasFindFirstOrThrowArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matriculas.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matriculas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculasWithIdOnly = await prisma.matriculas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends matriculasFindManyArgs>(args?: SelectSubset<T, matriculasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matriculas.
     * @param {matriculasCreateArgs} args - Arguments to create a Matriculas.
     * @example
     * // Create one Matriculas
     * const Matriculas = await prisma.matriculas.create({
     *   data: {
     *     // ... data to create a Matriculas
     *   }
     * })
     * 
     */
    create<T extends matriculasCreateArgs>(args: SelectSubset<T, matriculasCreateArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matriculas.
     * @param {matriculasCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matriculas = await prisma.matriculas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matriculasCreateManyArgs>(args?: SelectSubset<T, matriculasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matriculas.
     * @param {matriculasDeleteArgs} args - Arguments to delete one Matriculas.
     * @example
     * // Delete one Matriculas
     * const Matriculas = await prisma.matriculas.delete({
     *   where: {
     *     // ... filter to delete one Matriculas
     *   }
     * })
     * 
     */
    delete<T extends matriculasDeleteArgs>(args: SelectSubset<T, matriculasDeleteArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matriculas.
     * @param {matriculasUpdateArgs} args - Arguments to update one Matriculas.
     * @example
     * // Update one Matriculas
     * const matriculas = await prisma.matriculas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matriculasUpdateArgs>(args: SelectSubset<T, matriculasUpdateArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matriculas.
     * @param {matriculasDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matriculas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matriculasDeleteManyArgs>(args?: SelectSubset<T, matriculasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matriculas = await prisma.matriculas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matriculasUpdateManyArgs>(args: SelectSubset<T, matriculasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matriculas.
     * @param {matriculasUpsertArgs} args - Arguments to update or create a Matriculas.
     * @example
     * // Update or create a Matriculas
     * const matriculas = await prisma.matriculas.upsert({
     *   create: {
     *     // ... data to create a Matriculas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matriculas we want to update
     *   }
     * })
     */
    upsert<T extends matriculasUpsertArgs>(args: SelectSubset<T, matriculasUpsertArgs<ExtArgs>>): Prisma__matriculasClient<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matriculas.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends matriculasCountArgs>(
      args?: Subset<T, matriculasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatriculasAggregateArgs>(args: Subset<T, MatriculasAggregateArgs>): Prisma.PrismaPromise<GetMatriculasAggregateType<T>>

    /**
     * Group by Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends matriculasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matriculasGroupByArgs['orderBy'] }
        : { orderBy?: matriculasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, matriculasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the matriculas model
   */
  readonly fields: matriculasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for matriculas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matriculasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunos<T extends alunosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, alunosDefaultArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodos<T extends periodosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, periodosDefaultArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the matriculas model
   */
  interface matriculasFieldRefs {
    readonly id: FieldRef<"matriculas", 'Int'>
    readonly aluno_id: FieldRef<"matriculas", 'Int'>
    readonly periodo_id: FieldRef<"matriculas", 'Int'>
    readonly created_at: FieldRef<"matriculas", 'DateTime'>
    readonly updated_at: FieldRef<"matriculas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * matriculas findUnique
   */
  export type matriculasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter, which matriculas to fetch.
     */
    where: matriculasWhereUniqueInput
  }

  /**
   * matriculas findUniqueOrThrow
   */
  export type matriculasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter, which matriculas to fetch.
     */
    where: matriculasWhereUniqueInput
  }

  /**
   * matriculas findFirst
   */
  export type matriculasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter, which matriculas to fetch.
     */
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     */
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matriculas.
     */
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matriculas.
     */
    distinct?: MatriculasScalarFieldEnum | MatriculasScalarFieldEnum[]
  }

  /**
   * matriculas findFirstOrThrow
   */
  export type matriculasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter, which matriculas to fetch.
     */
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     */
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matriculas.
     */
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matriculas.
     */
    distinct?: MatriculasScalarFieldEnum | MatriculasScalarFieldEnum[]
  }

  /**
   * matriculas findMany
   */
  export type matriculasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter, which matriculas to fetch.
     */
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     */
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matriculas.
     */
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     */
    skip?: number
    distinct?: MatriculasScalarFieldEnum | MatriculasScalarFieldEnum[]
  }

  /**
   * matriculas create
   */
  export type matriculasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * The data needed to create a matriculas.
     */
    data: XOR<matriculasCreateInput, matriculasUncheckedCreateInput>
  }

  /**
   * matriculas createMany
   */
  export type matriculasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matriculas.
     */
    data: matriculasCreateManyInput | matriculasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matriculas update
   */
  export type matriculasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * The data needed to update a matriculas.
     */
    data: XOR<matriculasUpdateInput, matriculasUncheckedUpdateInput>
    /**
     * Choose, which matriculas to update.
     */
    where: matriculasWhereUniqueInput
  }

  /**
   * matriculas updateMany
   */
  export type matriculasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matriculas.
     */
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyInput>
    /**
     * Filter which matriculas to update
     */
    where?: matriculasWhereInput
    /**
     * Limit how many matriculas to update.
     */
    limit?: number
  }

  /**
   * matriculas upsert
   */
  export type matriculasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * The filter to search for the matriculas to update in case it exists.
     */
    where: matriculasWhereUniqueInput
    /**
     * In case the matriculas found by the `where` argument doesn't exist, create a new matriculas with this data.
     */
    create: XOR<matriculasCreateInput, matriculasUncheckedCreateInput>
    /**
     * In case the matriculas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matriculasUpdateInput, matriculasUncheckedUpdateInput>
  }

  /**
   * matriculas delete
   */
  export type matriculasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    /**
     * Filter which matriculas to delete.
     */
    where: matriculasWhereUniqueInput
  }

  /**
   * matriculas deleteMany
   */
  export type matriculasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matriculas to delete
     */
    where?: matriculasWhereInput
    /**
     * Limit how many matriculas to delete.
     */
    limit?: number
  }

  /**
   * matriculas without action
   */
  export type matriculasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
  }


  /**
   * Model notas
   */

  export type AggregateNotas = {
    _count: NotasCountAggregateOutputType | null
    _avg: NotasAvgAggregateOutputType | null
    _sum: NotasSumAggregateOutputType | null
    _min: NotasMinAggregateOutputType | null
    _max: NotasMaxAggregateOutputType | null
  }

  export type NotasAvgAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    disciplina_id: number | null
    periodo_id: number | null
    tipo_nota_id: number | null
    valor: Decimal | null
  }

  export type NotasSumAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    disciplina_id: number | null
    periodo_id: number | null
    tipo_nota_id: number | null
    valor: Decimal | null
  }

  export type NotasMinAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    disciplina_id: number | null
    periodo_id: number | null
    tipo_nota_id: number | null
    valor: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotasMaxAggregateOutputType = {
    id: number | null
    aluno_id: number | null
    disciplina_id: number | null
    periodo_id: number | null
    tipo_nota_id: number | null
    valor: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotasCountAggregateOutputType = {
    id: number
    aluno_id: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NotasAvgAggregateInputType = {
    id?: true
    aluno_id?: true
    disciplina_id?: true
    periodo_id?: true
    tipo_nota_id?: true
    valor?: true
  }

  export type NotasSumAggregateInputType = {
    id?: true
    aluno_id?: true
    disciplina_id?: true
    periodo_id?: true
    tipo_nota_id?: true
    valor?: true
  }

  export type NotasMinAggregateInputType = {
    id?: true
    aluno_id?: true
    disciplina_id?: true
    periodo_id?: true
    tipo_nota_id?: true
    valor?: true
    created_at?: true
    updated_at?: true
  }

  export type NotasMaxAggregateInputType = {
    id?: true
    aluno_id?: true
    disciplina_id?: true
    periodo_id?: true
    tipo_nota_id?: true
    valor?: true
    created_at?: true
    updated_at?: true
  }

  export type NotasCountAggregateInputType = {
    id?: true
    aluno_id?: true
    disciplina_id?: true
    periodo_id?: true
    tipo_nota_id?: true
    valor?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notas to aggregate.
     */
    where?: notasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notas to fetch.
     */
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notas
    **/
    _count?: true | NotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotasMaxAggregateInputType
  }

  export type GetNotasAggregateType<T extends NotasAggregateArgs> = {
        [P in keyof T & keyof AggregateNotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotas[P]>
      : GetScalarType<T[P], AggregateNotas[P]>
  }




  export type notasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notasWhereInput
    orderBy?: notasOrderByWithAggregationInput | notasOrderByWithAggregationInput[]
    by: NotasScalarFieldEnum[] | NotasScalarFieldEnum
    having?: notasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotasCountAggregateInputType | true
    _avg?: NotasAvgAggregateInputType
    _sum?: NotasSumAggregateInputType
    _min?: NotasMinAggregateInputType
    _max?: NotasMaxAggregateInputType
  }

  export type NotasGroupByOutputType = {
    id: number
    aluno_id: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal
    created_at: Date | null
    updated_at: Date | null
    _count: NotasCountAggregateOutputType | null
    _avg: NotasAvgAggregateOutputType | null
    _sum: NotasSumAggregateOutputType | null
    _min: NotasMinAggregateOutputType | null
    _max: NotasMaxAggregateOutputType | null
  }

  type GetNotasGroupByPayload<T extends notasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotasGroupByOutputType[P]>
            : GetScalarType<T[P], NotasGroupByOutputType[P]>
        }
      >
    >


  export type notasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aluno_id?: boolean
    disciplina_id?: boolean
    periodo_id?: boolean
    tipo_nota_id?: boolean
    valor?: boolean
    created_at?: boolean
    updated_at?: boolean
    alunos?: boolean | alunosDefaultArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notas"]>



  export type notasSelectScalar = {
    id?: boolean
    aluno_id?: boolean
    disciplina_id?: boolean
    periodo_id?: boolean
    tipo_nota_id?: boolean
    valor?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type notasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aluno_id" | "disciplina_id" | "periodo_id" | "tipo_nota_id" | "valor" | "created_at" | "updated_at", ExtArgs["result"]["notas"]>
  export type notasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | alunosDefaultArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }

  export type $notasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notas"
    objects: {
      alunos: Prisma.$alunosPayload<ExtArgs>
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>
      periodos: Prisma.$periodosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aluno_id: number
      disciplina_id: number
      periodo_id: number
      tipo_nota_id: number
      valor: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["notas"]>
    composites: {}
  }

  type notasGetPayload<S extends boolean | null | undefined | notasDefaultArgs> = $Result.GetResult<Prisma.$notasPayload, S>

  type notasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotasCountAggregateInputType | true
    }

  export interface notasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notas'], meta: { name: 'notas' } }
    /**
     * Find zero or one Notas that matches the filter.
     * @param {notasFindUniqueArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notasFindUniqueArgs>(args: SelectSubset<T, notasFindUniqueArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notasFindUniqueOrThrowArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notasFindUniqueOrThrowArgs>(args: SelectSubset<T, notasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasFindFirstArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notasFindFirstArgs>(args?: SelectSubset<T, notasFindFirstArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasFindFirstOrThrowArgs} args - Arguments to find a Notas
     * @example
     * // Get one Notas
     * const notas = await prisma.notas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notasFindFirstOrThrowArgs>(args?: SelectSubset<T, notasFindFirstOrThrowArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notas
     * const notas = await prisma.notas.findMany()
     * 
     * // Get first 10 Notas
     * const notas = await prisma.notas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notasWithIdOnly = await prisma.notas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notasFindManyArgs>(args?: SelectSubset<T, notasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notas.
     * @param {notasCreateArgs} args - Arguments to create a Notas.
     * @example
     * // Create one Notas
     * const Notas = await prisma.notas.create({
     *   data: {
     *     // ... data to create a Notas
     *   }
     * })
     * 
     */
    create<T extends notasCreateArgs>(args: SelectSubset<T, notasCreateArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notas.
     * @param {notasCreateManyArgs} args - Arguments to create many Notas.
     * @example
     * // Create many Notas
     * const notas = await prisma.notas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notasCreateManyArgs>(args?: SelectSubset<T, notasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notas.
     * @param {notasDeleteArgs} args - Arguments to delete one Notas.
     * @example
     * // Delete one Notas
     * const Notas = await prisma.notas.delete({
     *   where: {
     *     // ... filter to delete one Notas
     *   }
     * })
     * 
     */
    delete<T extends notasDeleteArgs>(args: SelectSubset<T, notasDeleteArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notas.
     * @param {notasUpdateArgs} args - Arguments to update one Notas.
     * @example
     * // Update one Notas
     * const notas = await prisma.notas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notasUpdateArgs>(args: SelectSubset<T, notasUpdateArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notas.
     * @param {notasDeleteManyArgs} args - Arguments to filter Notas to delete.
     * @example
     * // Delete a few Notas
     * const { count } = await prisma.notas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notasDeleteManyArgs>(args?: SelectSubset<T, notasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notas
     * const notas = await prisma.notas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notasUpdateManyArgs>(args: SelectSubset<T, notasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notas.
     * @param {notasUpsertArgs} args - Arguments to update or create a Notas.
     * @example
     * // Update or create a Notas
     * const notas = await prisma.notas.upsert({
     *   create: {
     *     // ... data to create a Notas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notas we want to update
     *   }
     * })
     */
    upsert<T extends notasUpsertArgs>(args: SelectSubset<T, notasUpsertArgs<ExtArgs>>): Prisma__notasClient<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasCountArgs} args - Arguments to filter Notas to count.
     * @example
     * // Count the number of Notas
     * const count = await prisma.notas.count({
     *   where: {
     *     // ... the filter for the Notas we want to count
     *   }
     * })
    **/
    count<T extends notasCountArgs>(
      args?: Subset<T, notasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotasAggregateArgs>(args: Subset<T, NotasAggregateArgs>): Prisma.PrismaPromise<GetNotasAggregateType<T>>

    /**
     * Group by Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notasGroupByArgs['orderBy'] }
        : { orderBy?: notasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notas model
   */
  readonly fields: notasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunos<T extends alunosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, alunosDefaultArgs<ExtArgs>>): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplinas<T extends disciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinasDefaultArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodos<T extends periodosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, periodosDefaultArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notas model
   */
  interface notasFieldRefs {
    readonly id: FieldRef<"notas", 'Int'>
    readonly aluno_id: FieldRef<"notas", 'Int'>
    readonly disciplina_id: FieldRef<"notas", 'Int'>
    readonly periodo_id: FieldRef<"notas", 'Int'>
    readonly tipo_nota_id: FieldRef<"notas", 'Int'>
    readonly valor: FieldRef<"notas", 'Decimal'>
    readonly created_at: FieldRef<"notas", 'DateTime'>
    readonly updated_at: FieldRef<"notas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notas findUnique
   */
  export type notasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter, which notas to fetch.
     */
    where: notasWhereUniqueInput
  }

  /**
   * notas findUniqueOrThrow
   */
  export type notasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter, which notas to fetch.
     */
    where: notasWhereUniqueInput
  }

  /**
   * notas findFirst
   */
  export type notasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter, which notas to fetch.
     */
    where?: notasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notas to fetch.
     */
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notas.
     */
    cursor?: notasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notas.
     */
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * notas findFirstOrThrow
   */
  export type notasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter, which notas to fetch.
     */
    where?: notasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notas to fetch.
     */
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notas.
     */
    cursor?: notasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notas.
     */
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * notas findMany
   */
  export type notasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter, which notas to fetch.
     */
    where?: notasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notas to fetch.
     */
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notas.
     */
    cursor?: notasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notas.
     */
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * notas create
   */
  export type notasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * The data needed to create a notas.
     */
    data: XOR<notasCreateInput, notasUncheckedCreateInput>
  }

  /**
   * notas createMany
   */
  export type notasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notas.
     */
    data: notasCreateManyInput | notasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notas update
   */
  export type notasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * The data needed to update a notas.
     */
    data: XOR<notasUpdateInput, notasUncheckedUpdateInput>
    /**
     * Choose, which notas to update.
     */
    where: notasWhereUniqueInput
  }

  /**
   * notas updateMany
   */
  export type notasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notas.
     */
    data: XOR<notasUpdateManyMutationInput, notasUncheckedUpdateManyInput>
    /**
     * Filter which notas to update
     */
    where?: notasWhereInput
    /**
     * Limit how many notas to update.
     */
    limit?: number
  }

  /**
   * notas upsert
   */
  export type notasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * The filter to search for the notas to update in case it exists.
     */
    where: notasWhereUniqueInput
    /**
     * In case the notas found by the `where` argument doesn't exist, create a new notas with this data.
     */
    create: XOR<notasCreateInput, notasUncheckedCreateInput>
    /**
     * In case the notas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notasUpdateInput, notasUncheckedUpdateInput>
  }

  /**
   * notas delete
   */
  export type notasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    /**
     * Filter which notas to delete.
     */
    where: notasWhereUniqueInput
  }

  /**
   * notas deleteMany
   */
  export type notasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notas to delete
     */
    where?: notasWhereInput
    /**
     * Limit how many notas to delete.
     */
    limit?: number
  }

  /**
   * notas without action
   */
  export type notasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
  }


  /**
   * Model periodos
   */

  export type AggregatePeriodos = {
    _count: PeriodosCountAggregateOutputType | null
    _avg: PeriodosAvgAggregateOutputType | null
    _sum: PeriodosSumAggregateOutputType | null
    _min: PeriodosMinAggregateOutputType | null
    _max: PeriodosMaxAggregateOutputType | null
  }

  export type PeriodosAvgAggregateOutputType = {
    id: number | null
    ano: number | null
    curso_id: number | null
  }

  export type PeriodosSumAggregateOutputType = {
    id: number | null
    ano: number | null
    curso_id: number | null
  }

  export type PeriodosMinAggregateOutputType = {
    id: number | null
    ano: number | null
    curso_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PeriodosMaxAggregateOutputType = {
    id: number | null
    ano: number | null
    curso_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PeriodosCountAggregateOutputType = {
    id: number
    ano: number
    curso_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PeriodosAvgAggregateInputType = {
    id?: true
    ano?: true
    curso_id?: true
  }

  export type PeriodosSumAggregateInputType = {
    id?: true
    ano?: true
    curso_id?: true
  }

  export type PeriodosMinAggregateInputType = {
    id?: true
    ano?: true
    curso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PeriodosMaxAggregateInputType = {
    id?: true
    ano?: true
    curso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PeriodosCountAggregateInputType = {
    id?: true
    ano?: true
    curso_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PeriodosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which periodos to aggregate.
     */
    where?: periodosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of periodos to fetch.
     */
    orderBy?: periodosOrderByWithRelationInput | periodosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: periodosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned periodos
    **/
    _count?: true | PeriodosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodosMaxAggregateInputType
  }

  export type GetPeriodosAggregateType<T extends PeriodosAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodos[P]>
      : GetScalarType<T[P], AggregatePeriodos[P]>
  }




  export type periodosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: periodosWhereInput
    orderBy?: periodosOrderByWithAggregationInput | periodosOrderByWithAggregationInput[]
    by: PeriodosScalarFieldEnum[] | PeriodosScalarFieldEnum
    having?: periodosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodosCountAggregateInputType | true
    _avg?: PeriodosAvgAggregateInputType
    _sum?: PeriodosSumAggregateInputType
    _min?: PeriodosMinAggregateInputType
    _max?: PeriodosMaxAggregateInputType
  }

  export type PeriodosGroupByOutputType = {
    id: number
    ano: number
    curso_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: PeriodosCountAggregateOutputType | null
    _avg: PeriodosAvgAggregateOutputType | null
    _sum: PeriodosSumAggregateOutputType | null
    _min: PeriodosMinAggregateOutputType | null
    _max: PeriodosMaxAggregateOutputType | null
  }

  type GetPeriodosGroupByPayload<T extends periodosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodosGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodosGroupByOutputType[P]>
        }
      >
    >


  export type periodosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ano?: boolean
    curso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    matriculas?: boolean | periodos$matriculasArgs<ExtArgs>
    notas?: boolean | periodos$notasArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    turmas?: boolean | periodos$turmasArgs<ExtArgs>
    _count?: boolean | PeriodosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodos"]>



  export type periodosSelectScalar = {
    id?: boolean
    ano?: boolean
    curso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type periodosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ano" | "curso_id" | "created_at" | "updated_at", ExtArgs["result"]["periodos"]>
  export type periodosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | periodos$matriculasArgs<ExtArgs>
    notas?: boolean | periodos$notasArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    turmas?: boolean | periodos$turmasArgs<ExtArgs>
    _count?: boolean | PeriodosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $periodosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "periodos"
    objects: {
      matriculas: Prisma.$matriculasPayload<ExtArgs>[]
      notas: Prisma.$notasPayload<ExtArgs>[]
      cursos: Prisma.$cursosPayload<ExtArgs>
      turmas: Prisma.$turmasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ano: number
      curso_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["periodos"]>
    composites: {}
  }

  type periodosGetPayload<S extends boolean | null | undefined | periodosDefaultArgs> = $Result.GetResult<Prisma.$periodosPayload, S>

  type periodosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<periodosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodosCountAggregateInputType | true
    }

  export interface periodosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['periodos'], meta: { name: 'periodos' } }
    /**
     * Find zero or one Periodos that matches the filter.
     * @param {periodosFindUniqueArgs} args - Arguments to find a Periodos
     * @example
     * // Get one Periodos
     * const periodos = await prisma.periodos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends periodosFindUniqueArgs>(args: SelectSubset<T, periodosFindUniqueArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periodos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {periodosFindUniqueOrThrowArgs} args - Arguments to find a Periodos
     * @example
     * // Get one Periodos
     * const periodos = await prisma.periodos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends periodosFindUniqueOrThrowArgs>(args: SelectSubset<T, periodosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosFindFirstArgs} args - Arguments to find a Periodos
     * @example
     * // Get one Periodos
     * const periodos = await prisma.periodos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends periodosFindFirstArgs>(args?: SelectSubset<T, periodosFindFirstArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosFindFirstOrThrowArgs} args - Arguments to find a Periodos
     * @example
     * // Get one Periodos
     * const periodos = await prisma.periodos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends periodosFindFirstOrThrowArgs>(args?: SelectSubset<T, periodosFindFirstOrThrowArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodos.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const periodosWithIdOnly = await prisma.periodos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends periodosFindManyArgs>(args?: SelectSubset<T, periodosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periodos.
     * @param {periodosCreateArgs} args - Arguments to create a Periodos.
     * @example
     * // Create one Periodos
     * const Periodos = await prisma.periodos.create({
     *   data: {
     *     // ... data to create a Periodos
     *   }
     * })
     * 
     */
    create<T extends periodosCreateArgs>(args: SelectSubset<T, periodosCreateArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodos.
     * @param {periodosCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodos = await prisma.periodos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends periodosCreateManyArgs>(args?: SelectSubset<T, periodosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Periodos.
     * @param {periodosDeleteArgs} args - Arguments to delete one Periodos.
     * @example
     * // Delete one Periodos
     * const Periodos = await prisma.periodos.delete({
     *   where: {
     *     // ... filter to delete one Periodos
     *   }
     * })
     * 
     */
    delete<T extends periodosDeleteArgs>(args: SelectSubset<T, periodosDeleteArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periodos.
     * @param {periodosUpdateArgs} args - Arguments to update one Periodos.
     * @example
     * // Update one Periodos
     * const periodos = await prisma.periodos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends periodosUpdateArgs>(args: SelectSubset<T, periodosUpdateArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodos.
     * @param {periodosDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends periodosDeleteManyArgs>(args?: SelectSubset<T, periodosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodos = await prisma.periodos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends periodosUpdateManyArgs>(args: SelectSubset<T, periodosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Periodos.
     * @param {periodosUpsertArgs} args - Arguments to update or create a Periodos.
     * @example
     * // Update or create a Periodos
     * const periodos = await prisma.periodos.upsert({
     *   create: {
     *     // ... data to create a Periodos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodos we want to update
     *   }
     * })
     */
    upsert<T extends periodosUpsertArgs>(args: SelectSubset<T, periodosUpsertArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodos.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends periodosCountArgs>(
      args?: Subset<T, periodosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodosAggregateArgs>(args: Subset<T, PeriodosAggregateArgs>): Prisma.PrismaPromise<GetPeriodosAggregateType<T>>

    /**
     * Group by Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends periodosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: periodosGroupByArgs['orderBy'] }
        : { orderBy?: periodosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, periodosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the periodos model
   */
  readonly fields: periodosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for periodos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__periodosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matriculas<T extends periodos$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, periodos$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matriculasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notas<T extends periodos$notasArgs<ExtArgs> = {}>(args?: Subset<T, periodos$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cursos<T extends cursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursosDefaultArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turmas<T extends periodos$turmasArgs<ExtArgs> = {}>(args?: Subset<T, periodos$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the periodos model
   */
  interface periodosFieldRefs {
    readonly id: FieldRef<"periodos", 'Int'>
    readonly ano: FieldRef<"periodos", 'Int'>
    readonly curso_id: FieldRef<"periodos", 'Int'>
    readonly created_at: FieldRef<"periodos", 'DateTime'>
    readonly updated_at: FieldRef<"periodos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * periodos findUnique
   */
  export type periodosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter, which periodos to fetch.
     */
    where: periodosWhereUniqueInput
  }

  /**
   * periodos findUniqueOrThrow
   */
  export type periodosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter, which periodos to fetch.
     */
    where: periodosWhereUniqueInput
  }

  /**
   * periodos findFirst
   */
  export type periodosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter, which periodos to fetch.
     */
    where?: periodosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of periodos to fetch.
     */
    orderBy?: periodosOrderByWithRelationInput | periodosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for periodos.
     */
    cursor?: periodosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of periodos.
     */
    distinct?: PeriodosScalarFieldEnum | PeriodosScalarFieldEnum[]
  }

  /**
   * periodos findFirstOrThrow
   */
  export type periodosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter, which periodos to fetch.
     */
    where?: periodosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of periodos to fetch.
     */
    orderBy?: periodosOrderByWithRelationInput | periodosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for periodos.
     */
    cursor?: periodosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of periodos.
     */
    distinct?: PeriodosScalarFieldEnum | PeriodosScalarFieldEnum[]
  }

  /**
   * periodos findMany
   */
  export type periodosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter, which periodos to fetch.
     */
    where?: periodosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of periodos to fetch.
     */
    orderBy?: periodosOrderByWithRelationInput | periodosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing periodos.
     */
    cursor?: periodosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` periodos.
     */
    skip?: number
    distinct?: PeriodosScalarFieldEnum | PeriodosScalarFieldEnum[]
  }

  /**
   * periodos create
   */
  export type periodosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * The data needed to create a periodos.
     */
    data: XOR<periodosCreateInput, periodosUncheckedCreateInput>
  }

  /**
   * periodos createMany
   */
  export type periodosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many periodos.
     */
    data: periodosCreateManyInput | periodosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * periodos update
   */
  export type periodosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * The data needed to update a periodos.
     */
    data: XOR<periodosUpdateInput, periodosUncheckedUpdateInput>
    /**
     * Choose, which periodos to update.
     */
    where: periodosWhereUniqueInput
  }

  /**
   * periodos updateMany
   */
  export type periodosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update periodos.
     */
    data: XOR<periodosUpdateManyMutationInput, periodosUncheckedUpdateManyInput>
    /**
     * Filter which periodos to update
     */
    where?: periodosWhereInput
    /**
     * Limit how many periodos to update.
     */
    limit?: number
  }

  /**
   * periodos upsert
   */
  export type periodosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * The filter to search for the periodos to update in case it exists.
     */
    where: periodosWhereUniqueInput
    /**
     * In case the periodos found by the `where` argument doesn't exist, create a new periodos with this data.
     */
    create: XOR<periodosCreateInput, periodosUncheckedCreateInput>
    /**
     * In case the periodos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<periodosUpdateInput, periodosUncheckedUpdateInput>
  }

  /**
   * periodos delete
   */
  export type periodosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
    /**
     * Filter which periodos to delete.
     */
    where: periodosWhereUniqueInput
  }

  /**
   * periodos deleteMany
   */
  export type periodosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which periodos to delete
     */
    where?: periodosWhereInput
    /**
     * Limit how many periodos to delete.
     */
    limit?: number
  }

  /**
   * periodos.matriculas
   */
  export type periodos$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matriculas
     */
    select?: matriculasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matriculas
     */
    omit?: matriculasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matriculasInclude<ExtArgs> | null
    where?: matriculasWhereInput
    orderBy?: matriculasOrderByWithRelationInput | matriculasOrderByWithRelationInput[]
    cursor?: matriculasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculasScalarFieldEnum | MatriculasScalarFieldEnum[]
  }

  /**
   * periodos.notas
   */
  export type periodos$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notas
     */
    select?: notasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notas
     */
    omit?: notasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notasInclude<ExtArgs> | null
    where?: notasWhereInput
    orderBy?: notasOrderByWithRelationInput | notasOrderByWithRelationInput[]
    cursor?: notasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotasScalarFieldEnum | NotasScalarFieldEnum[]
  }

  /**
   * periodos.turmas
   */
  export type periodos$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    where?: turmasWhereInput
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    cursor?: turmasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmasScalarFieldEnum | TurmasScalarFieldEnum[]
  }

  /**
   * periodos without action
   */
  export type periodosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodos
     */
    select?: periodosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the periodos
     */
    omit?: periodosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: periodosInclude<ExtArgs> | null
  }


  /**
   * Model professores
   */

  export type AggregateProfessores = {
    _count: ProfessoresCountAggregateOutputType | null
    _avg: ProfessoresAvgAggregateOutputType | null
    _sum: ProfessoresSumAggregateOutputType | null
    _min: ProfessoresMinAggregateOutputType | null
    _max: ProfessoresMaxAggregateOutputType | null
  }

  export type ProfessoresAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfessoresSumAggregateOutputType = {
    id: number | null
  }

  export type ProfessoresMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessoresMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessoresCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfessoresAvgAggregateInputType = {
    id?: true
  }

  export type ProfessoresSumAggregateInputType = {
    id?: true
  }

  export type ProfessoresMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessoresMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessoresCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfessoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professores to aggregate.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professores
    **/
    _count?: true | ProfessoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessoresMaxAggregateInputType
  }

  export type GetProfessoresAggregateType<T extends ProfessoresAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessores[P]>
      : GetScalarType<T[P], AggregateProfessores[P]>
  }




  export type professoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professoresWhereInput
    orderBy?: professoresOrderByWithAggregationInput | professoresOrderByWithAggregationInput[]
    by: ProfessoresScalarFieldEnum[] | ProfessoresScalarFieldEnum
    having?: professoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessoresCountAggregateInputType | true
    _avg?: ProfessoresAvgAggregateInputType
    _sum?: ProfessoresSumAggregateInputType
    _min?: ProfessoresMinAggregateInputType
    _max?: ProfessoresMaxAggregateInputType
  }

  export type ProfessoresGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProfessoresCountAggregateOutputType | null
    _avg: ProfessoresAvgAggregateOutputType | null
    _sum: ProfessoresSumAggregateOutputType | null
    _min: ProfessoresMinAggregateOutputType | null
    _max: ProfessoresMaxAggregateOutputType | null
  }

  type GetProfessoresGroupByPayload<T extends professoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessoresGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessoresGroupByOutputType[P]>
        }
      >
    >


  export type professoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    disciplines?: boolean | professores$disciplinesArgs<ExtArgs>
    _count?: boolean | ProfessoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professores"]>



  export type professoresSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type professoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "created_at" | "updated_at", ExtArgs["result"]["professores"]>
  export type professoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplines?: boolean | professores$disciplinesArgs<ExtArgs>
    _count?: boolean | ProfessoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $professoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professores"
    objects: {
      disciplines: Prisma.$disciplinasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["professores"]>
    composites: {}
  }

  type professoresGetPayload<S extends boolean | null | undefined | professoresDefaultArgs> = $Result.GetResult<Prisma.$professoresPayload, S>

  type professoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessoresCountAggregateInputType | true
    }

  export interface professoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professores'], meta: { name: 'professores' } }
    /**
     * Find zero or one Professores that matches the filter.
     * @param {professoresFindUniqueArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professoresFindUniqueArgs>(args: SelectSubset<T, professoresFindUniqueArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professoresFindUniqueOrThrowArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professoresFindUniqueOrThrowArgs>(args: SelectSubset<T, professoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindFirstArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professoresFindFirstArgs>(args?: SelectSubset<T, professoresFindFirstArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindFirstOrThrowArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professoresFindFirstOrThrowArgs>(args?: SelectSubset<T, professoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professores
     * const professores = await prisma.professores.findMany()
     * 
     * // Get first 10 Professores
     * const professores = await prisma.professores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professoresWithIdOnly = await prisma.professores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends professoresFindManyArgs>(args?: SelectSubset<T, professoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professores.
     * @param {professoresCreateArgs} args - Arguments to create a Professores.
     * @example
     * // Create one Professores
     * const Professores = await prisma.professores.create({
     *   data: {
     *     // ... data to create a Professores
     *   }
     * })
     * 
     */
    create<T extends professoresCreateArgs>(args: SelectSubset<T, professoresCreateArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professores.
     * @param {professoresCreateManyArgs} args - Arguments to create many Professores.
     * @example
     * // Create many Professores
     * const professores = await prisma.professores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professoresCreateManyArgs>(args?: SelectSubset<T, professoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professores.
     * @param {professoresDeleteArgs} args - Arguments to delete one Professores.
     * @example
     * // Delete one Professores
     * const Professores = await prisma.professores.delete({
     *   where: {
     *     // ... filter to delete one Professores
     *   }
     * })
     * 
     */
    delete<T extends professoresDeleteArgs>(args: SelectSubset<T, professoresDeleteArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professores.
     * @param {professoresUpdateArgs} args - Arguments to update one Professores.
     * @example
     * // Update one Professores
     * const professores = await prisma.professores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professoresUpdateArgs>(args: SelectSubset<T, professoresUpdateArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professores.
     * @param {professoresDeleteManyArgs} args - Arguments to filter Professores to delete.
     * @example
     * // Delete a few Professores
     * const { count } = await prisma.professores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professoresDeleteManyArgs>(args?: SelectSubset<T, professoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professores
     * const professores = await prisma.professores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professoresUpdateManyArgs>(args: SelectSubset<T, professoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professores.
     * @param {professoresUpsertArgs} args - Arguments to update or create a Professores.
     * @example
     * // Update or create a Professores
     * const professores = await prisma.professores.upsert({
     *   create: {
     *     // ... data to create a Professores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professores we want to update
     *   }
     * })
     */
    upsert<T extends professoresUpsertArgs>(args: SelectSubset<T, professoresUpsertArgs<ExtArgs>>): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresCountArgs} args - Arguments to filter Professores to count.
     * @example
     * // Count the number of Professores
     * const count = await prisma.professores.count({
     *   where: {
     *     // ... the filter for the Professores we want to count
     *   }
     * })
    **/
    count<T extends professoresCountArgs>(
      args?: Subset<T, professoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessoresAggregateArgs>(args: Subset<T, ProfessoresAggregateArgs>): Prisma.PrismaPromise<GetProfessoresAggregateType<T>>

    /**
     * Group by Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professoresGroupByArgs['orderBy'] }
        : { orderBy?: professoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professores model
   */
  readonly fields: professoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplines<T extends professores$disciplinesArgs<ExtArgs> = {}>(args?: Subset<T, professores$disciplinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professores model
   */
  interface professoresFieldRefs {
    readonly id: FieldRef<"professores", 'Int'>
    readonly nome: FieldRef<"professores", 'String'>
    readonly email: FieldRef<"professores", 'String'>
    readonly created_at: FieldRef<"professores", 'DateTime'>
    readonly updated_at: FieldRef<"professores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * professores findUnique
   */
  export type professoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where: professoresWhereUniqueInput
  }

  /**
   * professores findUniqueOrThrow
   */
  export type professoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where: professoresWhereUniqueInput
  }

  /**
   * professores findFirst
   */
  export type professoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professores.
     */
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }

  /**
   * professores findFirstOrThrow
   */
  export type professoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professores.
     */
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }

  /**
   * professores findMany
   */
  export type professoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }

  /**
   * professores create
   */
  export type professoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * The data needed to create a professores.
     */
    data: XOR<professoresCreateInput, professoresUncheckedCreateInput>
  }

  /**
   * professores createMany
   */
  export type professoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professores.
     */
    data: professoresCreateManyInput | professoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professores update
   */
  export type professoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * The data needed to update a professores.
     */
    data: XOR<professoresUpdateInput, professoresUncheckedUpdateInput>
    /**
     * Choose, which professores to update.
     */
    where: professoresWhereUniqueInput
  }

  /**
   * professores updateMany
   */
  export type professoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professores.
     */
    data: XOR<professoresUpdateManyMutationInput, professoresUncheckedUpdateManyInput>
    /**
     * Filter which professores to update
     */
    where?: professoresWhereInput
    /**
     * Limit how many professores to update.
     */
    limit?: number
  }

  /**
   * professores upsert
   */
  export type professoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * The filter to search for the professores to update in case it exists.
     */
    where: professoresWhereUniqueInput
    /**
     * In case the professores found by the `where` argument doesn't exist, create a new professores with this data.
     */
    create: XOR<professoresCreateInput, professoresUncheckedCreateInput>
    /**
     * In case the professores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professoresUpdateInput, professoresUncheckedUpdateInput>
  }

  /**
   * professores delete
   */
  export type professoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
    /**
     * Filter which professores to delete.
     */
    where: professoresWhereUniqueInput
  }

  /**
   * professores deleteMany
   */
  export type professoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professores to delete
     */
    where?: professoresWhereInput
    /**
     * Limit how many professores to delete.
     */
    limit?: number
  }

  /**
   * professores.disciplines
   */
  export type professores$disciplinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    where?: disciplinasWhereInput
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    cursor?: disciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * professores without action
   */
  export type professoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professores
     */
    omit?: professoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professoresInclude<ExtArgs> | null
  }


  /**
   * Model turmas
   */

  export type AggregateTurmas = {
    _count: TurmasCountAggregateOutputType | null
    _avg: TurmasAvgAggregateOutputType | null
    _sum: TurmasSumAggregateOutputType | null
    _min: TurmasMinAggregateOutputType | null
    _max: TurmasMaxAggregateOutputType | null
  }

  export type TurmasAvgAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
    periodo_id: number | null
  }

  export type TurmasSumAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
    periodo_id: number | null
  }

  export type TurmasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    disciplina_id: number | null
    periodo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TurmasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    disciplina_id: number | null
    periodo_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TurmasCountAggregateOutputType = {
    id: number
    nome: number
    disciplina_id: number
    periodo_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TurmasAvgAggregateInputType = {
    id?: true
    disciplina_id?: true
    periodo_id?: true
  }

  export type TurmasSumAggregateInputType = {
    id?: true
    disciplina_id?: true
    periodo_id?: true
  }

  export type TurmasMinAggregateInputType = {
    id?: true
    nome?: true
    disciplina_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TurmasMaxAggregateInputType = {
    id?: true
    nome?: true
    disciplina_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TurmasCountAggregateInputType = {
    id?: true
    nome?: true
    disciplina_id?: true
    periodo_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TurmasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turmas to aggregate.
     */
    where?: turmasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: turmasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned turmas
    **/
    _count?: true | TurmasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmasMaxAggregateInputType
  }

  export type GetTurmasAggregateType<T extends TurmasAggregateArgs> = {
        [P in keyof T & keyof AggregateTurmas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurmas[P]>
      : GetScalarType<T[P], AggregateTurmas[P]>
  }




  export type turmasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: turmasWhereInput
    orderBy?: turmasOrderByWithAggregationInput | turmasOrderByWithAggregationInput[]
    by: TurmasScalarFieldEnum[] | TurmasScalarFieldEnum
    having?: turmasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmasCountAggregateInputType | true
    _avg?: TurmasAvgAggregateInputType
    _sum?: TurmasSumAggregateInputType
    _min?: TurmasMinAggregateInputType
    _max?: TurmasMaxAggregateInputType
  }

  export type TurmasGroupByOutputType = {
    id: number
    nome: string
    disciplina_id: number
    periodo_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: TurmasCountAggregateOutputType | null
    _avg: TurmasAvgAggregateOutputType | null
    _sum: TurmasSumAggregateOutputType | null
    _min: TurmasMinAggregateOutputType | null
    _max: TurmasMaxAggregateOutputType | null
  }

  type GetTurmasGroupByPayload<T extends turmasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmasGroupByOutputType[P]>
            : GetScalarType<T[P], TurmasGroupByOutputType[P]>
        }
      >
    >


  export type turmasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    disciplina_id?: boolean
    periodo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turmas"]>



  export type turmasSelectScalar = {
    id?: boolean
    nome?: boolean
    disciplina_id?: boolean
    periodo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type turmasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "disciplina_id" | "periodo_id" | "created_at" | "updated_at", ExtArgs["result"]["turmas"]>
  export type turmasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    periodos?: boolean | periodosDefaultArgs<ExtArgs>
  }

  export type $turmasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "turmas"
    objects: {
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>
      periodos: Prisma.$periodosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      disciplina_id: number
      periodo_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["turmas"]>
    composites: {}
  }

  type turmasGetPayload<S extends boolean | null | undefined | turmasDefaultArgs> = $Result.GetResult<Prisma.$turmasPayload, S>

  type turmasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<turmasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmasCountAggregateInputType | true
    }

  export interface turmasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['turmas'], meta: { name: 'turmas' } }
    /**
     * Find zero or one Turmas that matches the filter.
     * @param {turmasFindUniqueArgs} args - Arguments to find a Turmas
     * @example
     * // Get one Turmas
     * const turmas = await prisma.turmas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends turmasFindUniqueArgs>(args: SelectSubset<T, turmasFindUniqueArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turmas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {turmasFindUniqueOrThrowArgs} args - Arguments to find a Turmas
     * @example
     * // Get one Turmas
     * const turmas = await prisma.turmas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends turmasFindUniqueOrThrowArgs>(args: SelectSubset<T, turmasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasFindFirstArgs} args - Arguments to find a Turmas
     * @example
     * // Get one Turmas
     * const turmas = await prisma.turmas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends turmasFindFirstArgs>(args?: SelectSubset<T, turmasFindFirstArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turmas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasFindFirstOrThrowArgs} args - Arguments to find a Turmas
     * @example
     * // Get one Turmas
     * const turmas = await prisma.turmas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends turmasFindFirstOrThrowArgs>(args?: SelectSubset<T, turmasFindFirstOrThrowArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turmas.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turmas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmasWithIdOnly = await prisma.turmas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends turmasFindManyArgs>(args?: SelectSubset<T, turmasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turmas.
     * @param {turmasCreateArgs} args - Arguments to create a Turmas.
     * @example
     * // Create one Turmas
     * const Turmas = await prisma.turmas.create({
     *   data: {
     *     // ... data to create a Turmas
     *   }
     * })
     * 
     */
    create<T extends turmasCreateArgs>(args: SelectSubset<T, turmasCreateArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {turmasCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turmas = await prisma.turmas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends turmasCreateManyArgs>(args?: SelectSubset<T, turmasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turmas.
     * @param {turmasDeleteArgs} args - Arguments to delete one Turmas.
     * @example
     * // Delete one Turmas
     * const Turmas = await prisma.turmas.delete({
     *   where: {
     *     // ... filter to delete one Turmas
     *   }
     * })
     * 
     */
    delete<T extends turmasDeleteArgs>(args: SelectSubset<T, turmasDeleteArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turmas.
     * @param {turmasUpdateArgs} args - Arguments to update one Turmas.
     * @example
     * // Update one Turmas
     * const turmas = await prisma.turmas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends turmasUpdateArgs>(args: SelectSubset<T, turmasUpdateArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {turmasDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turmas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends turmasDeleteManyArgs>(args?: SelectSubset<T, turmasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turmas = await prisma.turmas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends turmasUpdateManyArgs>(args: SelectSubset<T, turmasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turmas.
     * @param {turmasUpsertArgs} args - Arguments to update or create a Turmas.
     * @example
     * // Update or create a Turmas
     * const turmas = await prisma.turmas.upsert({
     *   create: {
     *     // ... data to create a Turmas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turmas we want to update
     *   }
     * })
     */
    upsert<T extends turmasUpsertArgs>(args: SelectSubset<T, turmasUpsertArgs<ExtArgs>>): Prisma__turmasClient<$Result.GetResult<Prisma.$turmasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turmas.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends turmasCountArgs>(
      args?: Subset<T, turmasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurmasAggregateArgs>(args: Subset<T, TurmasAggregateArgs>): Prisma.PrismaPromise<GetTurmasAggregateType<T>>

    /**
     * Group by Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {turmasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends turmasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: turmasGroupByArgs['orderBy'] }
        : { orderBy?: turmasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, turmasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the turmas model
   */
  readonly fields: turmasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for turmas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__turmasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplinas<T extends disciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinasDefaultArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodos<T extends periodosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, periodosDefaultArgs<ExtArgs>>): Prisma__periodosClient<$Result.GetResult<Prisma.$periodosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the turmas model
   */
  interface turmasFieldRefs {
    readonly id: FieldRef<"turmas", 'Int'>
    readonly nome: FieldRef<"turmas", 'String'>
    readonly disciplina_id: FieldRef<"turmas", 'Int'>
    readonly periodo_id: FieldRef<"turmas", 'Int'>
    readonly created_at: FieldRef<"turmas", 'DateTime'>
    readonly updated_at: FieldRef<"turmas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * turmas findUnique
   */
  export type turmasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where: turmasWhereUniqueInput
  }

  /**
   * turmas findUniqueOrThrow
   */
  export type turmasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where: turmasWhereUniqueInput
  }

  /**
   * turmas findFirst
   */
  export type turmasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where?: turmasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmasScalarFieldEnum | TurmasScalarFieldEnum[]
  }

  /**
   * turmas findFirstOrThrow
   */
  export type turmasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where?: turmasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for turmas.
     */
    cursor?: turmasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of turmas.
     */
    distinct?: TurmasScalarFieldEnum | TurmasScalarFieldEnum[]
  }

  /**
   * turmas findMany
   */
  export type turmasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter, which turmas to fetch.
     */
    where?: turmasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of turmas to fetch.
     */
    orderBy?: turmasOrderByWithRelationInput | turmasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing turmas.
     */
    cursor?: turmasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` turmas.
     */
    skip?: number
    distinct?: TurmasScalarFieldEnum | TurmasScalarFieldEnum[]
  }

  /**
   * turmas create
   */
  export type turmasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * The data needed to create a turmas.
     */
    data: XOR<turmasCreateInput, turmasUncheckedCreateInput>
  }

  /**
   * turmas createMany
   */
  export type turmasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many turmas.
     */
    data: turmasCreateManyInput | turmasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * turmas update
   */
  export type turmasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * The data needed to update a turmas.
     */
    data: XOR<turmasUpdateInput, turmasUncheckedUpdateInput>
    /**
     * Choose, which turmas to update.
     */
    where: turmasWhereUniqueInput
  }

  /**
   * turmas updateMany
   */
  export type turmasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update turmas.
     */
    data: XOR<turmasUpdateManyMutationInput, turmasUncheckedUpdateManyInput>
    /**
     * Filter which turmas to update
     */
    where?: turmasWhereInput
    /**
     * Limit how many turmas to update.
     */
    limit?: number
  }

  /**
   * turmas upsert
   */
  export type turmasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * The filter to search for the turmas to update in case it exists.
     */
    where: turmasWhereUniqueInput
    /**
     * In case the turmas found by the `where` argument doesn't exist, create a new turmas with this data.
     */
    create: XOR<turmasCreateInput, turmasUncheckedCreateInput>
    /**
     * In case the turmas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<turmasUpdateInput, turmasUncheckedUpdateInput>
  }

  /**
   * turmas delete
   */
  export type turmasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
    /**
     * Filter which turmas to delete.
     */
    where: turmasWhereUniqueInput
  }

  /**
   * turmas deleteMany
   */
  export type turmasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which turmas to delete
     */
    where?: turmasWhereInput
    /**
     * Limit how many turmas to delete.
     */
    limit?: number
  }

  /**
   * turmas without action
   */
  export type turmasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the turmas
     */
    select?: turmasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the turmas
     */
    omit?: turmasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: turmasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlunosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AlunosScalarFieldEnum = (typeof AlunosScalarFieldEnum)[keyof typeof AlunosScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const DisciplinasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    curso_id: 'curso_id',
    professor_id: 'professor_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum]


  export const MatriculasScalarFieldEnum: {
    id: 'id',
    aluno_id: 'aluno_id',
    periodo_id: 'periodo_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MatriculasScalarFieldEnum = (typeof MatriculasScalarFieldEnum)[keyof typeof MatriculasScalarFieldEnum]


  export const NotasScalarFieldEnum: {
    id: 'id',
    aluno_id: 'aluno_id',
    disciplina_id: 'disciplina_id',
    periodo_id: 'periodo_id',
    tipo_nota_id: 'tipo_nota_id',
    valor: 'valor',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NotasScalarFieldEnum = (typeof NotasScalarFieldEnum)[keyof typeof NotasScalarFieldEnum]


  export const PeriodosScalarFieldEnum: {
    id: 'id',
    ano: 'ano',
    curso_id: 'curso_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PeriodosScalarFieldEnum = (typeof PeriodosScalarFieldEnum)[keyof typeof PeriodosScalarFieldEnum]


  export const ProfessoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfessoresScalarFieldEnum = (typeof ProfessoresScalarFieldEnum)[keyof typeof ProfessoresScalarFieldEnum]


  export const TurmasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    disciplina_id: 'disciplina_id',
    periodo_id: 'periodo_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TurmasScalarFieldEnum = (typeof TurmasScalarFieldEnum)[keyof typeof TurmasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const alunosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email'
  };

  export type alunosOrderByRelevanceFieldEnum = (typeof alunosOrderByRelevanceFieldEnum)[keyof typeof alunosOrderByRelevanceFieldEnum]


  export const cursosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type cursosOrderByRelevanceFieldEnum = (typeof cursosOrderByRelevanceFieldEnum)[keyof typeof cursosOrderByRelevanceFieldEnum]


  export const disciplinasOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type disciplinasOrderByRelevanceFieldEnum = (typeof disciplinasOrderByRelevanceFieldEnum)[keyof typeof disciplinasOrderByRelevanceFieldEnum]


  export const professoresOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email'
  };

  export type professoresOrderByRelevanceFieldEnum = (typeof professoresOrderByRelevanceFieldEnum)[keyof typeof professoresOrderByRelevanceFieldEnum]


  export const turmasOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type turmasOrderByRelevanceFieldEnum = (typeof turmasOrderByRelevanceFieldEnum)[keyof typeof turmasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type alunosWhereInput = {
    AND?: alunosWhereInput | alunosWhereInput[]
    OR?: alunosWhereInput[]
    NOT?: alunosWhereInput | alunosWhereInput[]
    id?: IntFilter<"alunos"> | number
    nome?: StringFilter<"alunos"> | string
    email?: StringNullableFilter<"alunos"> | string | null
    created_at?: DateTimeNullableFilter<"alunos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"alunos"> | Date | string | null
    matriculas?: MatriculasListRelationFilter
    notas?: NotasListRelationFilter
  }

  export type alunosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    matriculas?: matriculasOrderByRelationAggregateInput
    notas?: notasOrderByRelationAggregateInput
    _relevance?: alunosOrderByRelevanceInput
  }

  export type alunosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: alunosWhereInput | alunosWhereInput[]
    OR?: alunosWhereInput[]
    NOT?: alunosWhereInput | alunosWhereInput[]
    nome?: StringFilter<"alunos"> | string
    created_at?: DateTimeNullableFilter<"alunos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"alunos"> | Date | string | null
    matriculas?: MatriculasListRelationFilter
    notas?: NotasListRelationFilter
  }, "id" | "email">

  export type alunosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: alunosCountOrderByAggregateInput
    _avg?: alunosAvgOrderByAggregateInput
    _max?: alunosMaxOrderByAggregateInput
    _min?: alunosMinOrderByAggregateInput
    _sum?: alunosSumOrderByAggregateInput
  }

  export type alunosScalarWhereWithAggregatesInput = {
    AND?: alunosScalarWhereWithAggregatesInput | alunosScalarWhereWithAggregatesInput[]
    OR?: alunosScalarWhereWithAggregatesInput[]
    NOT?: alunosScalarWhereWithAggregatesInput | alunosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alunos"> | number
    nome?: StringWithAggregatesFilter<"alunos"> | string
    email?: StringNullableWithAggregatesFilter<"alunos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"alunos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"alunos"> | Date | string | null
  }

  export type cursosWhereInput = {
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    id?: IntFilter<"cursos"> | number
    nome?: StringFilter<"cursos"> | string
    descricao?: StringNullableFilter<"cursos"> | string | null
    created_at?: DateTimeNullableFilter<"cursos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cursos"> | Date | string | null
    disciplinas?: DisciplinasListRelationFilter
    periodos?: PeriodosListRelationFilter
  }

  export type cursosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    disciplinas?: disciplinasOrderByRelationAggregateInput
    periodos?: periodosOrderByRelationAggregateInput
    _relevance?: cursosOrderByRelevanceInput
  }

  export type cursosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    nome?: StringFilter<"cursos"> | string
    descricao?: StringNullableFilter<"cursos"> | string | null
    created_at?: DateTimeNullableFilter<"cursos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cursos"> | Date | string | null
    disciplinas?: DisciplinasListRelationFilter
    periodos?: PeriodosListRelationFilter
  }, "id">

  export type cursosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: cursosCountOrderByAggregateInput
    _avg?: cursosAvgOrderByAggregateInput
    _max?: cursosMaxOrderByAggregateInput
    _min?: cursosMinOrderByAggregateInput
    _sum?: cursosSumOrderByAggregateInput
  }

  export type cursosScalarWhereWithAggregatesInput = {
    AND?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    OR?: cursosScalarWhereWithAggregatesInput[]
    NOT?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cursos"> | number
    nome?: StringWithAggregatesFilter<"cursos"> | string
    descricao?: StringNullableWithAggregatesFilter<"cursos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"cursos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"cursos"> | Date | string | null
  }

  export type disciplinasWhereInput = {
    AND?: disciplinasWhereInput | disciplinasWhereInput[]
    OR?: disciplinasWhereInput[]
    NOT?: disciplinasWhereInput | disciplinasWhereInput[]
    id?: IntFilter<"disciplinas"> | number
    nome?: StringFilter<"disciplinas"> | string
    curso_id?: IntFilter<"disciplinas"> | number
    professor_id?: IntNullableFilter<"disciplinas"> | number | null
    created_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    professores?: XOR<ProfessoresNullableScalarRelationFilter, professoresWhereInput> | null
    notas?: NotasListRelationFilter
    turmas?: TurmasListRelationFilter
  }

  export type disciplinasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cursos?: cursosOrderByWithRelationInput
    professores?: professoresOrderByWithRelationInput
    notas?: notasOrderByRelationAggregateInput
    turmas?: turmasOrderByRelationAggregateInput
    _relevance?: disciplinasOrderByRelevanceInput
  }

  export type disciplinasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: disciplinasWhereInput | disciplinasWhereInput[]
    OR?: disciplinasWhereInput[]
    NOT?: disciplinasWhereInput | disciplinasWhereInput[]
    nome?: StringFilter<"disciplinas"> | string
    curso_id?: IntFilter<"disciplinas"> | number
    professor_id?: IntNullableFilter<"disciplinas"> | number | null
    created_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    professores?: XOR<ProfessoresNullableScalarRelationFilter, professoresWhereInput> | null
    notas?: NotasListRelationFilter
    turmas?: TurmasListRelationFilter
  }, "id">

  export type disciplinasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: disciplinasCountOrderByAggregateInput
    _avg?: disciplinasAvgOrderByAggregateInput
    _max?: disciplinasMaxOrderByAggregateInput
    _min?: disciplinasMinOrderByAggregateInput
    _sum?: disciplinasSumOrderByAggregateInput
  }

  export type disciplinasScalarWhereWithAggregatesInput = {
    AND?: disciplinasScalarWhereWithAggregatesInput | disciplinasScalarWhereWithAggregatesInput[]
    OR?: disciplinasScalarWhereWithAggregatesInput[]
    NOT?: disciplinasScalarWhereWithAggregatesInput | disciplinasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"disciplinas"> | number
    nome?: StringWithAggregatesFilter<"disciplinas"> | string
    curso_id?: IntWithAggregatesFilter<"disciplinas"> | number
    professor_id?: IntNullableWithAggregatesFilter<"disciplinas"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"disciplinas"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"disciplinas"> | Date | string | null
  }

  export type matriculasWhereInput = {
    AND?: matriculasWhereInput | matriculasWhereInput[]
    OR?: matriculasWhereInput[]
    NOT?: matriculasWhereInput | matriculasWhereInput[]
    id?: IntFilter<"matriculas"> | number
    aluno_id?: IntFilter<"matriculas"> | number
    periodo_id?: IntFilter<"matriculas"> | number
    created_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
    alunos?: XOR<AlunosScalarRelationFilter, alunosWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }

  export type matriculasOrderByWithRelationInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alunos?: alunosOrderByWithRelationInput
    periodos?: periodosOrderByWithRelationInput
  }

  export type matriculasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: matriculasWhereInput | matriculasWhereInput[]
    OR?: matriculasWhereInput[]
    NOT?: matriculasWhereInput | matriculasWhereInput[]
    aluno_id?: IntFilter<"matriculas"> | number
    periodo_id?: IntFilter<"matriculas"> | number
    created_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
    alunos?: XOR<AlunosScalarRelationFilter, alunosWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }, "id">

  export type matriculasOrderByWithAggregationInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: matriculasCountOrderByAggregateInput
    _avg?: matriculasAvgOrderByAggregateInput
    _max?: matriculasMaxOrderByAggregateInput
    _min?: matriculasMinOrderByAggregateInput
    _sum?: matriculasSumOrderByAggregateInput
  }

  export type matriculasScalarWhereWithAggregatesInput = {
    AND?: matriculasScalarWhereWithAggregatesInput | matriculasScalarWhereWithAggregatesInput[]
    OR?: matriculasScalarWhereWithAggregatesInput[]
    NOT?: matriculasScalarWhereWithAggregatesInput | matriculasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"matriculas"> | number
    aluno_id?: IntWithAggregatesFilter<"matriculas"> | number
    periodo_id?: IntWithAggregatesFilter<"matriculas"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"matriculas"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"matriculas"> | Date | string | null
  }

  export type notasWhereInput = {
    AND?: notasWhereInput | notasWhereInput[]
    OR?: notasWhereInput[]
    NOT?: notasWhereInput | notasWhereInput[]
    id?: IntFilter<"notas"> | number
    aluno_id?: IntFilter<"notas"> | number
    disciplina_id?: IntFilter<"notas"> | number
    periodo_id?: IntFilter<"notas"> | number
    tipo_nota_id?: IntFilter<"notas"> | number
    valor?: DecimalFilter<"notas"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"notas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notas"> | Date | string | null
    alunos?: XOR<AlunosScalarRelationFilter, alunosWhereInput>
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }

  export type notasOrderByWithRelationInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alunos?: alunosOrderByWithRelationInput
    disciplinas?: disciplinasOrderByWithRelationInput
    periodos?: periodosOrderByWithRelationInput
  }

  export type notasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aluno_id_disciplina_id_periodo_id_tipo_nota_id?: notasAluno_idDisciplina_idPeriodo_idTipo_nota_idCompoundUniqueInput
    AND?: notasWhereInput | notasWhereInput[]
    OR?: notasWhereInput[]
    NOT?: notasWhereInput | notasWhereInput[]
    aluno_id?: IntFilter<"notas"> | number
    disciplina_id?: IntFilter<"notas"> | number
    periodo_id?: IntFilter<"notas"> | number
    tipo_nota_id?: IntFilter<"notas"> | number
    valor?: DecimalFilter<"notas"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"notas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notas"> | Date | string | null
    alunos?: XOR<AlunosScalarRelationFilter, alunosWhereInput>
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }, "id" | "aluno_id_disciplina_id_periodo_id_tipo_nota_id">

  export type notasOrderByWithAggregationInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: notasCountOrderByAggregateInput
    _avg?: notasAvgOrderByAggregateInput
    _max?: notasMaxOrderByAggregateInput
    _min?: notasMinOrderByAggregateInput
    _sum?: notasSumOrderByAggregateInput
  }

  export type notasScalarWhereWithAggregatesInput = {
    AND?: notasScalarWhereWithAggregatesInput | notasScalarWhereWithAggregatesInput[]
    OR?: notasScalarWhereWithAggregatesInput[]
    NOT?: notasScalarWhereWithAggregatesInput | notasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notas"> | number
    aluno_id?: IntWithAggregatesFilter<"notas"> | number
    disciplina_id?: IntWithAggregatesFilter<"notas"> | number
    periodo_id?: IntWithAggregatesFilter<"notas"> | number
    tipo_nota_id?: IntWithAggregatesFilter<"notas"> | number
    valor?: DecimalWithAggregatesFilter<"notas"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"notas"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notas"> | Date | string | null
  }

  export type periodosWhereInput = {
    AND?: periodosWhereInput | periodosWhereInput[]
    OR?: periodosWhereInput[]
    NOT?: periodosWhereInput | periodosWhereInput[]
    id?: IntFilter<"periodos"> | number
    ano?: IntFilter<"periodos"> | number
    curso_id?: IntFilter<"periodos"> | number
    created_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
    matriculas?: MatriculasListRelationFilter
    notas?: NotasListRelationFilter
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    turmas?: TurmasListRelationFilter
  }

  export type periodosOrderByWithRelationInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    matriculas?: matriculasOrderByRelationAggregateInput
    notas?: notasOrderByRelationAggregateInput
    cursos?: cursosOrderByWithRelationInput
    turmas?: turmasOrderByRelationAggregateInput
  }

  export type periodosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: periodosWhereInput | periodosWhereInput[]
    OR?: periodosWhereInput[]
    NOT?: periodosWhereInput | periodosWhereInput[]
    ano?: IntFilter<"periodos"> | number
    curso_id?: IntFilter<"periodos"> | number
    created_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
    matriculas?: MatriculasListRelationFilter
    notas?: NotasListRelationFilter
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    turmas?: TurmasListRelationFilter
  }, "id">

  export type periodosOrderByWithAggregationInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: periodosCountOrderByAggregateInput
    _avg?: periodosAvgOrderByAggregateInput
    _max?: periodosMaxOrderByAggregateInput
    _min?: periodosMinOrderByAggregateInput
    _sum?: periodosSumOrderByAggregateInput
  }

  export type periodosScalarWhereWithAggregatesInput = {
    AND?: periodosScalarWhereWithAggregatesInput | periodosScalarWhereWithAggregatesInput[]
    OR?: periodosScalarWhereWithAggregatesInput[]
    NOT?: periodosScalarWhereWithAggregatesInput | periodosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"periodos"> | number
    ano?: IntWithAggregatesFilter<"periodos"> | number
    curso_id?: IntWithAggregatesFilter<"periodos"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"periodos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"periodos"> | Date | string | null
  }

  export type professoresWhereInput = {
    AND?: professoresWhereInput | professoresWhereInput[]
    OR?: professoresWhereInput[]
    NOT?: professoresWhereInput | professoresWhereInput[]
    id?: IntFilter<"professores"> | number
    nome?: StringFilter<"professores"> | string
    email?: StringNullableFilter<"professores"> | string | null
    created_at?: DateTimeNullableFilter<"professores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"professores"> | Date | string | null
    disciplines?: DisciplinasListRelationFilter
  }

  export type professoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    disciplines?: disciplinasOrderByRelationAggregateInput
    _relevance?: professoresOrderByRelevanceInput
  }

  export type professoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: professoresWhereInput | professoresWhereInput[]
    OR?: professoresWhereInput[]
    NOT?: professoresWhereInput | professoresWhereInput[]
    nome?: StringFilter<"professores"> | string
    created_at?: DateTimeNullableFilter<"professores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"professores"> | Date | string | null
    disciplines?: DisciplinasListRelationFilter
  }, "id" | "email">

  export type professoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: professoresCountOrderByAggregateInput
    _avg?: professoresAvgOrderByAggregateInput
    _max?: professoresMaxOrderByAggregateInput
    _min?: professoresMinOrderByAggregateInput
    _sum?: professoresSumOrderByAggregateInput
  }

  export type professoresScalarWhereWithAggregatesInput = {
    AND?: professoresScalarWhereWithAggregatesInput | professoresScalarWhereWithAggregatesInput[]
    OR?: professoresScalarWhereWithAggregatesInput[]
    NOT?: professoresScalarWhereWithAggregatesInput | professoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"professores"> | number
    nome?: StringWithAggregatesFilter<"professores"> | string
    email?: StringNullableWithAggregatesFilter<"professores"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"professores"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"professores"> | Date | string | null
  }

  export type turmasWhereInput = {
    AND?: turmasWhereInput | turmasWhereInput[]
    OR?: turmasWhereInput[]
    NOT?: turmasWhereInput | turmasWhereInput[]
    id?: IntFilter<"turmas"> | number
    nome?: StringFilter<"turmas"> | string
    disciplina_id?: IntFilter<"turmas"> | number
    periodo_id?: IntFilter<"turmas"> | number
    created_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }

  export type turmasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    disciplinas?: disciplinasOrderByWithRelationInput
    periodos?: periodosOrderByWithRelationInput
    _relevance?: turmasOrderByRelevanceInput
  }

  export type turmasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: turmasWhereInput | turmasWhereInput[]
    OR?: turmasWhereInput[]
    NOT?: turmasWhereInput | turmasWhereInput[]
    nome?: StringFilter<"turmas"> | string
    disciplina_id?: IntFilter<"turmas"> | number
    periodo_id?: IntFilter<"turmas"> | number
    created_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
    periodos?: XOR<PeriodosScalarRelationFilter, periodosWhereInput>
  }, "id">

  export type turmasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: turmasCountOrderByAggregateInput
    _avg?: turmasAvgOrderByAggregateInput
    _max?: turmasMaxOrderByAggregateInput
    _min?: turmasMinOrderByAggregateInput
    _sum?: turmasSumOrderByAggregateInput
  }

  export type turmasScalarWhereWithAggregatesInput = {
    AND?: turmasScalarWhereWithAggregatesInput | turmasScalarWhereWithAggregatesInput[]
    OR?: turmasScalarWhereWithAggregatesInput[]
    NOT?: turmasScalarWhereWithAggregatesInput | turmasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"turmas"> | number
    nome?: StringWithAggregatesFilter<"turmas"> | string
    disciplina_id?: IntWithAggregatesFilter<"turmas"> | number
    periodo_id?: IntWithAggregatesFilter<"turmas"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"turmas"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"turmas"> | Date | string | null
  }

  export type alunosCreateInput = {
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutAlunosInput
    notas?: notasCreateNestedManyWithoutAlunosInput
  }

  export type alunosUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutAlunosInput
    notas?: notasUncheckedCreateNestedManyWithoutAlunosInput
  }

  export type alunosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutAlunosNestedInput
    notas?: notasUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutAlunosNestedInput
    notas?: notasUncheckedUpdateManyWithoutAlunosNestedInput
  }

  export type alunosCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alunosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alunosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cursosCreateInput = {
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas?: disciplinasCreateNestedManyWithoutCursosInput
    periodos?: periodosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas?: disciplinasUncheckedCreateNestedManyWithoutCursosInput
    periodos?: periodosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateManyWithoutCursosNestedInput
    periodos?: periodosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUncheckedUpdateManyWithoutCursosNestedInput
    periodos?: periodosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type cursosCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cursosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cursosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disciplinasCreateInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cursos: cursosCreateNestedOneWithoutDisciplinasInput
    professores?: professoresCreateNestedOneWithoutDisciplinesInput
    notas?: notasCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateInput = {
    id?: number
    nome: string
    curso_id: number
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: cursosUpdateOneRequiredWithoutDisciplinasNestedInput
    professores?: professoresUpdateOneWithoutDisciplinesNestedInput
    notas?: notasUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasCreateManyInput = {
    id?: number
    nome: string
    curso_id: number
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type disciplinasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disciplinasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alunos: alunosCreateNestedOneWithoutMatriculasInput
    periodos: periodosCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateInput = {
    id?: number
    aluno_id: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alunos?: alunosUpdateOneRequiredWithoutMatriculasNestedInput
    periodos?: periodosUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasCreateManyInput = {
    id?: number
    aluno_id: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasCreateInput = {
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alunos: alunosCreateNestedOneWithoutNotasInput
    disciplinas: disciplinasCreateNestedOneWithoutNotasInput
    periodos: periodosCreateNestedOneWithoutNotasInput
  }

  export type notasUncheckedCreateInput = {
    id?: number
    aluno_id: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasUpdateInput = {
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alunos?: alunosUpdateOneRequiredWithoutNotasNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutNotasNestedInput
    periodos?: periodosUpdateOneRequiredWithoutNotasNestedInput
  }

  export type notasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasCreateManyInput = {
    id?: number
    aluno_id: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasUpdateManyMutationInput = {
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type periodosCreateInput = {
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutPeriodosInput
    notas?: notasCreateNestedManyWithoutPeriodosInput
    cursos: cursosCreateNestedOneWithoutPeriodosInput
    turmas?: turmasCreateNestedManyWithoutPeriodosInput
  }

  export type periodosUncheckedCreateInput = {
    id?: number
    ano: number
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutPeriodosInput
    notas?: notasUncheckedCreateNestedManyWithoutPeriodosInput
    turmas?: turmasUncheckedCreateNestedManyWithoutPeriodosInput
  }

  export type periodosUpdateInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutPeriodosNestedInput
    notas?: notasUpdateManyWithoutPeriodosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutPeriodosNestedInput
    turmas?: turmasUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutPeriodosNestedInput
    notas?: notasUncheckedUpdateManyWithoutPeriodosNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosCreateManyInput = {
    id?: number
    ano: number
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type periodosUpdateManyMutationInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type periodosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professoresCreateInput = {
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplines?: disciplinasCreateNestedManyWithoutProfessoresInput
  }

  export type professoresUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplines?: disciplinasUncheckedCreateNestedManyWithoutProfessoresInput
  }

  export type professoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplines?: disciplinasUpdateManyWithoutProfessoresNestedInput
  }

  export type professoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplines?: disciplinasUncheckedUpdateManyWithoutProfessoresNestedInput
  }

  export type professoresCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type professoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasCreateInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas: disciplinasCreateNestedOneWithoutTurmasInput
    periodos: periodosCreateNestedOneWithoutTurmasInput
  }

  export type turmasUncheckedCreateInput = {
    id?: number
    nome: string
    disciplina_id: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateOneRequiredWithoutTurmasNestedInput
    periodos?: periodosUpdateOneRequiredWithoutTurmasNestedInput
  }

  export type turmasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasCreateManyInput = {
    id?: number
    nome: string
    disciplina_id: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MatriculasListRelationFilter = {
    every?: matriculasWhereInput
    some?: matriculasWhereInput
    none?: matriculasWhereInput
  }

  export type NotasListRelationFilter = {
    every?: notasWhereInput
    some?: notasWhereInput
    none?: notasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type matriculasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type alunosOrderByRelevanceInput = {
    fields: alunosOrderByRelevanceFieldEnum | alunosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alunosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alunosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type alunosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alunosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alunosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DisciplinasListRelationFilter = {
    every?: disciplinasWhereInput
    some?: disciplinasWhereInput
    none?: disciplinasWhereInput
  }

  export type PeriodosListRelationFilter = {
    every?: periodosWhereInput
    some?: periodosWhereInput
    none?: periodosWhereInput
  }

  export type disciplinasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type periodosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursosOrderByRelevanceInput = {
    fields: cursosOrderByRelevanceFieldEnum | cursosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cursosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cursosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cursosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cursosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cursosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CursosScalarRelationFilter = {
    is?: cursosWhereInput
    isNot?: cursosWhereInput
  }

  export type ProfessoresNullableScalarRelationFilter = {
    is?: professoresWhereInput | null
    isNot?: professoresWhereInput | null
  }

  export type TurmasListRelationFilter = {
    every?: turmasWhereInput
    some?: turmasWhereInput
    none?: turmasWhereInput
  }

  export type turmasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type disciplinasOrderByRelevanceInput = {
    fields: disciplinasOrderByRelevanceFieldEnum | disciplinasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type disciplinasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type disciplinasAvgOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrder
  }

  export type disciplinasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type disciplinasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type disciplinasSumOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    professor_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlunosScalarRelationFilter = {
    is?: alunosWhereInput
    isNot?: alunosWhereInput
  }

  export type PeriodosScalarRelationFilter = {
    is?: periodosWhereInput
    isNot?: periodosWhereInput
  }

  export type matriculasCountOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type matriculasAvgOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
  }

  export type matriculasMaxOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type matriculasMinOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type matriculasSumOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    periodo_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DisciplinasScalarRelationFilter = {
    is?: disciplinasWhereInput
    isNot?: disciplinasWhereInput
  }

  export type notasAluno_idDisciplina_idPeriodo_idTipo_nota_idCompoundUniqueInput = {
    aluno_id: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
  }

  export type notasCountOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notasAvgOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
  }

  export type notasMaxOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notasMinOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notasSumOrderByAggregateInput = {
    id?: SortOrder
    aluno_id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    tipo_nota_id?: SortOrder
    valor?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type periodosCountOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type periodosAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
  }

  export type periodosMaxOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type periodosMinOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type periodosSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    curso_id?: SortOrder
  }

  export type professoresOrderByRelevanceInput = {
    fields: professoresOrderByRelevanceFieldEnum | professoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type professoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type professoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type turmasOrderByRelevanceInput = {
    fields: turmasOrderByRelevanceFieldEnum | turmasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type turmasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type turmasAvgOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
  }

  export type turmasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type turmasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type turmasSumOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    periodo_id?: SortOrder
  }

  export type matriculasCreateNestedManyWithoutAlunosInput = {
    create?: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput> | matriculasCreateWithoutAlunosInput[] | matriculasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutAlunosInput | matriculasCreateOrConnectWithoutAlunosInput[]
    createMany?: matriculasCreateManyAlunosInputEnvelope
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
  }

  export type notasCreateNestedManyWithoutAlunosInput = {
    create?: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput> | notasCreateWithoutAlunosInput[] | notasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutAlunosInput | notasCreateOrConnectWithoutAlunosInput[]
    createMany?: notasCreateManyAlunosInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type matriculasUncheckedCreateNestedManyWithoutAlunosInput = {
    create?: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput> | matriculasCreateWithoutAlunosInput[] | matriculasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutAlunosInput | matriculasCreateOrConnectWithoutAlunosInput[]
    createMany?: matriculasCreateManyAlunosInputEnvelope
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
  }

  export type notasUncheckedCreateNestedManyWithoutAlunosInput = {
    create?: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput> | notasCreateWithoutAlunosInput[] | notasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutAlunosInput | notasCreateOrConnectWithoutAlunosInput[]
    createMany?: notasCreateManyAlunosInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type matriculasUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput> | matriculasCreateWithoutAlunosInput[] | matriculasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutAlunosInput | matriculasCreateOrConnectWithoutAlunosInput[]
    upsert?: matriculasUpsertWithWhereUniqueWithoutAlunosInput | matriculasUpsertWithWhereUniqueWithoutAlunosInput[]
    createMany?: matriculasCreateManyAlunosInputEnvelope
    set?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    disconnect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    delete?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    update?: matriculasUpdateWithWhereUniqueWithoutAlunosInput | matriculasUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: matriculasUpdateManyWithWhereWithoutAlunosInput | matriculasUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
  }

  export type notasUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput> | notasCreateWithoutAlunosInput[] | notasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutAlunosInput | notasCreateOrConnectWithoutAlunosInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutAlunosInput | notasUpsertWithWhereUniqueWithoutAlunosInput[]
    createMany?: notasCreateManyAlunosInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutAlunosInput | notasUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: notasUpdateManyWithWhereWithoutAlunosInput | notasUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type matriculasUncheckedUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput> | matriculasCreateWithoutAlunosInput[] | matriculasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutAlunosInput | matriculasCreateOrConnectWithoutAlunosInput[]
    upsert?: matriculasUpsertWithWhereUniqueWithoutAlunosInput | matriculasUpsertWithWhereUniqueWithoutAlunosInput[]
    createMany?: matriculasCreateManyAlunosInputEnvelope
    set?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    disconnect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    delete?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    update?: matriculasUpdateWithWhereUniqueWithoutAlunosInput | matriculasUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: matriculasUpdateManyWithWhereWithoutAlunosInput | matriculasUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
  }

  export type notasUncheckedUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput> | notasCreateWithoutAlunosInput[] | notasUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutAlunosInput | notasCreateOrConnectWithoutAlunosInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutAlunosInput | notasUpsertWithWhereUniqueWithoutAlunosInput[]
    createMany?: notasCreateManyAlunosInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutAlunosInput | notasUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: notasUpdateManyWithWhereWithoutAlunosInput | notasUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type disciplinasCreateNestedManyWithoutCursosInput = {
    create?: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput> | disciplinasCreateWithoutCursosInput[] | disciplinasUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutCursosInput | disciplinasCreateOrConnectWithoutCursosInput[]
    createMany?: disciplinasCreateManyCursosInputEnvelope
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
  }

  export type periodosCreateNestedManyWithoutCursosInput = {
    create?: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput> | periodosCreateWithoutCursosInput[] | periodosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: periodosCreateOrConnectWithoutCursosInput | periodosCreateOrConnectWithoutCursosInput[]
    createMany?: periodosCreateManyCursosInputEnvelope
    connect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
  }

  export type disciplinasUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput> | disciplinasCreateWithoutCursosInput[] | disciplinasUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutCursosInput | disciplinasCreateOrConnectWithoutCursosInput[]
    createMany?: disciplinasCreateManyCursosInputEnvelope
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
  }

  export type periodosUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput> | periodosCreateWithoutCursosInput[] | periodosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: periodosCreateOrConnectWithoutCursosInput | periodosCreateOrConnectWithoutCursosInput[]
    createMany?: periodosCreateManyCursosInputEnvelope
    connect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
  }

  export type disciplinasUpdateManyWithoutCursosNestedInput = {
    create?: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput> | disciplinasCreateWithoutCursosInput[] | disciplinasUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutCursosInput | disciplinasCreateOrConnectWithoutCursosInput[]
    upsert?: disciplinasUpsertWithWhereUniqueWithoutCursosInput | disciplinasUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: disciplinasCreateManyCursosInputEnvelope
    set?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    disconnect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    delete?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    update?: disciplinasUpdateWithWhereUniqueWithoutCursosInput | disciplinasUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: disciplinasUpdateManyWithWhereWithoutCursosInput | disciplinasUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
  }

  export type periodosUpdateManyWithoutCursosNestedInput = {
    create?: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput> | periodosCreateWithoutCursosInput[] | periodosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: periodosCreateOrConnectWithoutCursosInput | periodosCreateOrConnectWithoutCursosInput[]
    upsert?: periodosUpsertWithWhereUniqueWithoutCursosInput | periodosUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: periodosCreateManyCursosInputEnvelope
    set?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    disconnect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    delete?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    connect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    update?: periodosUpdateWithWhereUniqueWithoutCursosInput | periodosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: periodosUpdateManyWithWhereWithoutCursosInput | periodosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: periodosScalarWhereInput | periodosScalarWhereInput[]
  }

  export type disciplinasUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput> | disciplinasCreateWithoutCursosInput[] | disciplinasUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutCursosInput | disciplinasCreateOrConnectWithoutCursosInput[]
    upsert?: disciplinasUpsertWithWhereUniqueWithoutCursosInput | disciplinasUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: disciplinasCreateManyCursosInputEnvelope
    set?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    disconnect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    delete?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    update?: disciplinasUpdateWithWhereUniqueWithoutCursosInput | disciplinasUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: disciplinasUpdateManyWithWhereWithoutCursosInput | disciplinasUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
  }

  export type periodosUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput> | periodosCreateWithoutCursosInput[] | periodosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: periodosCreateOrConnectWithoutCursosInput | periodosCreateOrConnectWithoutCursosInput[]
    upsert?: periodosUpsertWithWhereUniqueWithoutCursosInput | periodosUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: periodosCreateManyCursosInputEnvelope
    set?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    disconnect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    delete?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    connect?: periodosWhereUniqueInput | periodosWhereUniqueInput[]
    update?: periodosUpdateWithWhereUniqueWithoutCursosInput | periodosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: periodosUpdateManyWithWhereWithoutCursosInput | periodosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: periodosScalarWhereInput | periodosScalarWhereInput[]
  }

  export type cursosCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<cursosCreateWithoutDisciplinasInput, cursosUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: cursosCreateOrConnectWithoutDisciplinasInput
    connect?: cursosWhereUniqueInput
  }

  export type professoresCreateNestedOneWithoutDisciplinesInput = {
    create?: XOR<professoresCreateWithoutDisciplinesInput, professoresUncheckedCreateWithoutDisciplinesInput>
    connectOrCreate?: professoresCreateOrConnectWithoutDisciplinesInput
    connect?: professoresWhereUniqueInput
  }

  export type notasCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput> | notasCreateWithoutDisciplinasInput[] | notasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: notasCreateOrConnectWithoutDisciplinasInput | notasCreateOrConnectWithoutDisciplinasInput[]
    createMany?: notasCreateManyDisciplinasInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type turmasCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput> | turmasCreateWithoutDisciplinasInput[] | turmasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutDisciplinasInput | turmasCreateOrConnectWithoutDisciplinasInput[]
    createMany?: turmasCreateManyDisciplinasInputEnvelope
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
  }

  export type notasUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput> | notasCreateWithoutDisciplinasInput[] | notasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: notasCreateOrConnectWithoutDisciplinasInput | notasCreateOrConnectWithoutDisciplinasInput[]
    createMany?: notasCreateManyDisciplinasInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type turmasUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput> | turmasCreateWithoutDisciplinasInput[] | turmasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutDisciplinasInput | turmasCreateOrConnectWithoutDisciplinasInput[]
    createMany?: turmasCreateManyDisciplinasInputEnvelope
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
  }

  export type cursosUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<cursosCreateWithoutDisciplinasInput, cursosUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: cursosCreateOrConnectWithoutDisciplinasInput
    upsert?: cursosUpsertWithoutDisciplinasInput
    connect?: cursosWhereUniqueInput
    update?: XOR<XOR<cursosUpdateToOneWithWhereWithoutDisciplinasInput, cursosUpdateWithoutDisciplinasInput>, cursosUncheckedUpdateWithoutDisciplinasInput>
  }

  export type professoresUpdateOneWithoutDisciplinesNestedInput = {
    create?: XOR<professoresCreateWithoutDisciplinesInput, professoresUncheckedCreateWithoutDisciplinesInput>
    connectOrCreate?: professoresCreateOrConnectWithoutDisciplinesInput
    upsert?: professoresUpsertWithoutDisciplinesInput
    disconnect?: professoresWhereInput | boolean
    delete?: professoresWhereInput | boolean
    connect?: professoresWhereUniqueInput
    update?: XOR<XOR<professoresUpdateToOneWithWhereWithoutDisciplinesInput, professoresUpdateWithoutDisciplinesInput>, professoresUncheckedUpdateWithoutDisciplinesInput>
  }

  export type notasUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput> | notasCreateWithoutDisciplinasInput[] | notasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: notasCreateOrConnectWithoutDisciplinasInput | notasCreateOrConnectWithoutDisciplinasInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutDisciplinasInput | notasUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: notasCreateManyDisciplinasInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutDisciplinasInput | notasUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: notasUpdateManyWithWhereWithoutDisciplinasInput | notasUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type turmasUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput> | turmasCreateWithoutDisciplinasInput[] | turmasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutDisciplinasInput | turmasCreateOrConnectWithoutDisciplinasInput[]
    upsert?: turmasUpsertWithWhereUniqueWithoutDisciplinasInput | turmasUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: turmasCreateManyDisciplinasInputEnvelope
    set?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    disconnect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    delete?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    update?: turmasUpdateWithWhereUniqueWithoutDisciplinasInput | turmasUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: turmasUpdateManyWithWhereWithoutDisciplinasInput | turmasUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: turmasScalarWhereInput | turmasScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type notasUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput> | notasCreateWithoutDisciplinasInput[] | notasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: notasCreateOrConnectWithoutDisciplinasInput | notasCreateOrConnectWithoutDisciplinasInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutDisciplinasInput | notasUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: notasCreateManyDisciplinasInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutDisciplinasInput | notasUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: notasUpdateManyWithWhereWithoutDisciplinasInput | notasUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type turmasUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput> | turmasCreateWithoutDisciplinasInput[] | turmasUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutDisciplinasInput | turmasCreateOrConnectWithoutDisciplinasInput[]
    upsert?: turmasUpsertWithWhereUniqueWithoutDisciplinasInput | turmasUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: turmasCreateManyDisciplinasInputEnvelope
    set?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    disconnect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    delete?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    update?: turmasUpdateWithWhereUniqueWithoutDisciplinasInput | turmasUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: turmasUpdateManyWithWhereWithoutDisciplinasInput | turmasUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: turmasScalarWhereInput | turmasScalarWhereInput[]
  }

  export type alunosCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutMatriculasInput
    connect?: alunosWhereUniqueInput
  }

  export type periodosCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<periodosCreateWithoutMatriculasInput, periodosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutMatriculasInput
    connect?: periodosWhereUniqueInput
  }

  export type alunosUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutMatriculasInput
    upsert?: alunosUpsertWithoutMatriculasInput
    connect?: alunosWhereUniqueInput
    update?: XOR<XOR<alunosUpdateToOneWithWhereWithoutMatriculasInput, alunosUpdateWithoutMatriculasInput>, alunosUncheckedUpdateWithoutMatriculasInput>
  }

  export type periodosUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<periodosCreateWithoutMatriculasInput, periodosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutMatriculasInput
    upsert?: periodosUpsertWithoutMatriculasInput
    connect?: periodosWhereUniqueInput
    update?: XOR<XOR<periodosUpdateToOneWithWhereWithoutMatriculasInput, periodosUpdateWithoutMatriculasInput>, periodosUncheckedUpdateWithoutMatriculasInput>
  }

  export type alunosCreateNestedOneWithoutNotasInput = {
    create?: XOR<alunosCreateWithoutNotasInput, alunosUncheckedCreateWithoutNotasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutNotasInput
    connect?: alunosWhereUniqueInput
  }

  export type disciplinasCreateNestedOneWithoutNotasInput = {
    create?: XOR<disciplinasCreateWithoutNotasInput, disciplinasUncheckedCreateWithoutNotasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutNotasInput
    connect?: disciplinasWhereUniqueInput
  }

  export type periodosCreateNestedOneWithoutNotasInput = {
    create?: XOR<periodosCreateWithoutNotasInput, periodosUncheckedCreateWithoutNotasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutNotasInput
    connect?: periodosWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type alunosUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<alunosCreateWithoutNotasInput, alunosUncheckedCreateWithoutNotasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutNotasInput
    upsert?: alunosUpsertWithoutNotasInput
    connect?: alunosWhereUniqueInput
    update?: XOR<XOR<alunosUpdateToOneWithWhereWithoutNotasInput, alunosUpdateWithoutNotasInput>, alunosUncheckedUpdateWithoutNotasInput>
  }

  export type disciplinasUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<disciplinasCreateWithoutNotasInput, disciplinasUncheckedCreateWithoutNotasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutNotasInput
    upsert?: disciplinasUpsertWithoutNotasInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<XOR<disciplinasUpdateToOneWithWhereWithoutNotasInput, disciplinasUpdateWithoutNotasInput>, disciplinasUncheckedUpdateWithoutNotasInput>
  }

  export type periodosUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<periodosCreateWithoutNotasInput, periodosUncheckedCreateWithoutNotasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutNotasInput
    upsert?: periodosUpsertWithoutNotasInput
    connect?: periodosWhereUniqueInput
    update?: XOR<XOR<periodosUpdateToOneWithWhereWithoutNotasInput, periodosUpdateWithoutNotasInput>, periodosUncheckedUpdateWithoutNotasInput>
  }

  export type matriculasCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput> | matriculasCreateWithoutPeriodosInput[] | matriculasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutPeriodosInput | matriculasCreateOrConnectWithoutPeriodosInput[]
    createMany?: matriculasCreateManyPeriodosInputEnvelope
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
  }

  export type notasCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput> | notasCreateWithoutPeriodosInput[] | notasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutPeriodosInput | notasCreateOrConnectWithoutPeriodosInput[]
    createMany?: notasCreateManyPeriodosInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type cursosCreateNestedOneWithoutPeriodosInput = {
    create?: XOR<cursosCreateWithoutPeriodosInput, cursosUncheckedCreateWithoutPeriodosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutPeriodosInput
    connect?: cursosWhereUniqueInput
  }

  export type turmasCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput> | turmasCreateWithoutPeriodosInput[] | turmasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutPeriodosInput | turmasCreateOrConnectWithoutPeriodosInput[]
    createMany?: turmasCreateManyPeriodosInputEnvelope
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
  }

  export type matriculasUncheckedCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput> | matriculasCreateWithoutPeriodosInput[] | matriculasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutPeriodosInput | matriculasCreateOrConnectWithoutPeriodosInput[]
    createMany?: matriculasCreateManyPeriodosInputEnvelope
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
  }

  export type notasUncheckedCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput> | notasCreateWithoutPeriodosInput[] | notasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutPeriodosInput | notasCreateOrConnectWithoutPeriodosInput[]
    createMany?: notasCreateManyPeriodosInputEnvelope
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
  }

  export type turmasUncheckedCreateNestedManyWithoutPeriodosInput = {
    create?: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput> | turmasCreateWithoutPeriodosInput[] | turmasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutPeriodosInput | turmasCreateOrConnectWithoutPeriodosInput[]
    createMany?: turmasCreateManyPeriodosInputEnvelope
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
  }

  export type matriculasUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput> | matriculasCreateWithoutPeriodosInput[] | matriculasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutPeriodosInput | matriculasCreateOrConnectWithoutPeriodosInput[]
    upsert?: matriculasUpsertWithWhereUniqueWithoutPeriodosInput | matriculasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: matriculasCreateManyPeriodosInputEnvelope
    set?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    disconnect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    delete?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    update?: matriculasUpdateWithWhereUniqueWithoutPeriodosInput | matriculasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: matriculasUpdateManyWithWhereWithoutPeriodosInput | matriculasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
  }

  export type notasUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput> | notasCreateWithoutPeriodosInput[] | notasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutPeriodosInput | notasCreateOrConnectWithoutPeriodosInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutPeriodosInput | notasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: notasCreateManyPeriodosInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutPeriodosInput | notasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: notasUpdateManyWithWhereWithoutPeriodosInput | notasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type cursosUpdateOneRequiredWithoutPeriodosNestedInput = {
    create?: XOR<cursosCreateWithoutPeriodosInput, cursosUncheckedCreateWithoutPeriodosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutPeriodosInput
    upsert?: cursosUpsertWithoutPeriodosInput
    connect?: cursosWhereUniqueInput
    update?: XOR<XOR<cursosUpdateToOneWithWhereWithoutPeriodosInput, cursosUpdateWithoutPeriodosInput>, cursosUncheckedUpdateWithoutPeriodosInput>
  }

  export type turmasUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput> | turmasCreateWithoutPeriodosInput[] | turmasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutPeriodosInput | turmasCreateOrConnectWithoutPeriodosInput[]
    upsert?: turmasUpsertWithWhereUniqueWithoutPeriodosInput | turmasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: turmasCreateManyPeriodosInputEnvelope
    set?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    disconnect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    delete?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    update?: turmasUpdateWithWhereUniqueWithoutPeriodosInput | turmasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: turmasUpdateManyWithWhereWithoutPeriodosInput | turmasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: turmasScalarWhereInput | turmasScalarWhereInput[]
  }

  export type matriculasUncheckedUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput> | matriculasCreateWithoutPeriodosInput[] | matriculasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: matriculasCreateOrConnectWithoutPeriodosInput | matriculasCreateOrConnectWithoutPeriodosInput[]
    upsert?: matriculasUpsertWithWhereUniqueWithoutPeriodosInput | matriculasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: matriculasCreateManyPeriodosInputEnvelope
    set?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    disconnect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    delete?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    connect?: matriculasWhereUniqueInput | matriculasWhereUniqueInput[]
    update?: matriculasUpdateWithWhereUniqueWithoutPeriodosInput | matriculasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: matriculasUpdateManyWithWhereWithoutPeriodosInput | matriculasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
  }

  export type notasUncheckedUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput> | notasCreateWithoutPeriodosInput[] | notasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: notasCreateOrConnectWithoutPeriodosInput | notasCreateOrConnectWithoutPeriodosInput[]
    upsert?: notasUpsertWithWhereUniqueWithoutPeriodosInput | notasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: notasCreateManyPeriodosInputEnvelope
    set?: notasWhereUniqueInput | notasWhereUniqueInput[]
    disconnect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    delete?: notasWhereUniqueInput | notasWhereUniqueInput[]
    connect?: notasWhereUniqueInput | notasWhereUniqueInput[]
    update?: notasUpdateWithWhereUniqueWithoutPeriodosInput | notasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: notasUpdateManyWithWhereWithoutPeriodosInput | notasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: notasScalarWhereInput | notasScalarWhereInput[]
  }

  export type turmasUncheckedUpdateManyWithoutPeriodosNestedInput = {
    create?: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput> | turmasCreateWithoutPeriodosInput[] | turmasUncheckedCreateWithoutPeriodosInput[]
    connectOrCreate?: turmasCreateOrConnectWithoutPeriodosInput | turmasCreateOrConnectWithoutPeriodosInput[]
    upsert?: turmasUpsertWithWhereUniqueWithoutPeriodosInput | turmasUpsertWithWhereUniqueWithoutPeriodosInput[]
    createMany?: turmasCreateManyPeriodosInputEnvelope
    set?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    disconnect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    delete?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    connect?: turmasWhereUniqueInput | turmasWhereUniqueInput[]
    update?: turmasUpdateWithWhereUniqueWithoutPeriodosInput | turmasUpdateWithWhereUniqueWithoutPeriodosInput[]
    updateMany?: turmasUpdateManyWithWhereWithoutPeriodosInput | turmasUpdateManyWithWhereWithoutPeriodosInput[]
    deleteMany?: turmasScalarWhereInput | turmasScalarWhereInput[]
  }

  export type disciplinasCreateNestedManyWithoutProfessoresInput = {
    create?: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput> | disciplinasCreateWithoutProfessoresInput[] | disciplinasUncheckedCreateWithoutProfessoresInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutProfessoresInput | disciplinasCreateOrConnectWithoutProfessoresInput[]
    createMany?: disciplinasCreateManyProfessoresInputEnvelope
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
  }

  export type disciplinasUncheckedCreateNestedManyWithoutProfessoresInput = {
    create?: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput> | disciplinasCreateWithoutProfessoresInput[] | disciplinasUncheckedCreateWithoutProfessoresInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutProfessoresInput | disciplinasCreateOrConnectWithoutProfessoresInput[]
    createMany?: disciplinasCreateManyProfessoresInputEnvelope
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
  }

  export type disciplinasUpdateManyWithoutProfessoresNestedInput = {
    create?: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput> | disciplinasCreateWithoutProfessoresInput[] | disciplinasUncheckedCreateWithoutProfessoresInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutProfessoresInput | disciplinasCreateOrConnectWithoutProfessoresInput[]
    upsert?: disciplinasUpsertWithWhereUniqueWithoutProfessoresInput | disciplinasUpsertWithWhereUniqueWithoutProfessoresInput[]
    createMany?: disciplinasCreateManyProfessoresInputEnvelope
    set?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    disconnect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    delete?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    update?: disciplinasUpdateWithWhereUniqueWithoutProfessoresInput | disciplinasUpdateWithWhereUniqueWithoutProfessoresInput[]
    updateMany?: disciplinasUpdateManyWithWhereWithoutProfessoresInput | disciplinasUpdateManyWithWhereWithoutProfessoresInput[]
    deleteMany?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
  }

  export type disciplinasUncheckedUpdateManyWithoutProfessoresNestedInput = {
    create?: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput> | disciplinasCreateWithoutProfessoresInput[] | disciplinasUncheckedCreateWithoutProfessoresInput[]
    connectOrCreate?: disciplinasCreateOrConnectWithoutProfessoresInput | disciplinasCreateOrConnectWithoutProfessoresInput[]
    upsert?: disciplinasUpsertWithWhereUniqueWithoutProfessoresInput | disciplinasUpsertWithWhereUniqueWithoutProfessoresInput[]
    createMany?: disciplinasCreateManyProfessoresInputEnvelope
    set?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    disconnect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    delete?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    connect?: disciplinasWhereUniqueInput | disciplinasWhereUniqueInput[]
    update?: disciplinasUpdateWithWhereUniqueWithoutProfessoresInput | disciplinasUpdateWithWhereUniqueWithoutProfessoresInput[]
    updateMany?: disciplinasUpdateManyWithWhereWithoutProfessoresInput | disciplinasUpdateManyWithWhereWithoutProfessoresInput[]
    deleteMany?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
  }

  export type disciplinasCreateNestedOneWithoutTurmasInput = {
    create?: XOR<disciplinasCreateWithoutTurmasInput, disciplinasUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutTurmasInput
    connect?: disciplinasWhereUniqueInput
  }

  export type periodosCreateNestedOneWithoutTurmasInput = {
    create?: XOR<periodosCreateWithoutTurmasInput, periodosUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutTurmasInput
    connect?: periodosWhereUniqueInput
  }

  export type disciplinasUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<disciplinasCreateWithoutTurmasInput, disciplinasUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutTurmasInput
    upsert?: disciplinasUpsertWithoutTurmasInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<XOR<disciplinasUpdateToOneWithWhereWithoutTurmasInput, disciplinasUpdateWithoutTurmasInput>, disciplinasUncheckedUpdateWithoutTurmasInput>
  }

  export type periodosUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<periodosCreateWithoutTurmasInput, periodosUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: periodosCreateOrConnectWithoutTurmasInput
    upsert?: periodosUpsertWithoutTurmasInput
    connect?: periodosWhereUniqueInput
    update?: XOR<XOR<periodosUpdateToOneWithWhereWithoutTurmasInput, periodosUpdateWithoutTurmasInput>, periodosUncheckedUpdateWithoutTurmasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type matriculasCreateWithoutAlunosInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    periodos: periodosCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateWithoutAlunosInput = {
    id?: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasCreateOrConnectWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    create: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput>
  }

  export type matriculasCreateManyAlunosInputEnvelope = {
    data: matriculasCreateManyAlunosInput | matriculasCreateManyAlunosInput[]
    skipDuplicates?: boolean
  }

  export type notasCreateWithoutAlunosInput = {
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas: disciplinasCreateNestedOneWithoutNotasInput
    periodos: periodosCreateNestedOneWithoutNotasInput
  }

  export type notasUncheckedCreateWithoutAlunosInput = {
    id?: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasCreateOrConnectWithoutAlunosInput = {
    where: notasWhereUniqueInput
    create: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput>
  }

  export type notasCreateManyAlunosInputEnvelope = {
    data: notasCreateManyAlunosInput | notasCreateManyAlunosInput[]
    skipDuplicates?: boolean
  }

  export type matriculasUpsertWithWhereUniqueWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    update: XOR<matriculasUpdateWithoutAlunosInput, matriculasUncheckedUpdateWithoutAlunosInput>
    create: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput>
  }

  export type matriculasUpdateWithWhereUniqueWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    data: XOR<matriculasUpdateWithoutAlunosInput, matriculasUncheckedUpdateWithoutAlunosInput>
  }

  export type matriculasUpdateManyWithWhereWithoutAlunosInput = {
    where: matriculasScalarWhereInput
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyWithoutAlunosInput>
  }

  export type matriculasScalarWhereInput = {
    AND?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
    OR?: matriculasScalarWhereInput[]
    NOT?: matriculasScalarWhereInput | matriculasScalarWhereInput[]
    id?: IntFilter<"matriculas"> | number
    aluno_id?: IntFilter<"matriculas"> | number
    periodo_id?: IntFilter<"matriculas"> | number
    created_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"matriculas"> | Date | string | null
  }

  export type notasUpsertWithWhereUniqueWithoutAlunosInput = {
    where: notasWhereUniqueInput
    update: XOR<notasUpdateWithoutAlunosInput, notasUncheckedUpdateWithoutAlunosInput>
    create: XOR<notasCreateWithoutAlunosInput, notasUncheckedCreateWithoutAlunosInput>
  }

  export type notasUpdateWithWhereUniqueWithoutAlunosInput = {
    where: notasWhereUniqueInput
    data: XOR<notasUpdateWithoutAlunosInput, notasUncheckedUpdateWithoutAlunosInput>
  }

  export type notasUpdateManyWithWhereWithoutAlunosInput = {
    where: notasScalarWhereInput
    data: XOR<notasUpdateManyMutationInput, notasUncheckedUpdateManyWithoutAlunosInput>
  }

  export type notasScalarWhereInput = {
    AND?: notasScalarWhereInput | notasScalarWhereInput[]
    OR?: notasScalarWhereInput[]
    NOT?: notasScalarWhereInput | notasScalarWhereInput[]
    id?: IntFilter<"notas"> | number
    aluno_id?: IntFilter<"notas"> | number
    disciplina_id?: IntFilter<"notas"> | number
    periodo_id?: IntFilter<"notas"> | number
    tipo_nota_id?: IntFilter<"notas"> | number
    valor?: DecimalFilter<"notas"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"notas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notas"> | Date | string | null
  }

  export type disciplinasCreateWithoutCursosInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    professores?: professoresCreateNestedOneWithoutDisciplinesInput
    notas?: notasCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutCursosInput = {
    id?: number
    nome: string
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutCursosInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput>
  }

  export type disciplinasCreateManyCursosInputEnvelope = {
    data: disciplinasCreateManyCursosInput | disciplinasCreateManyCursosInput[]
    skipDuplicates?: boolean
  }

  export type periodosCreateWithoutCursosInput = {
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutPeriodosInput
    notas?: notasCreateNestedManyWithoutPeriodosInput
    turmas?: turmasCreateNestedManyWithoutPeriodosInput
  }

  export type periodosUncheckedCreateWithoutCursosInput = {
    id?: number
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutPeriodosInput
    notas?: notasUncheckedCreateNestedManyWithoutPeriodosInput
    turmas?: turmasUncheckedCreateNestedManyWithoutPeriodosInput
  }

  export type periodosCreateOrConnectWithoutCursosInput = {
    where: periodosWhereUniqueInput
    create: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput>
  }

  export type periodosCreateManyCursosInputEnvelope = {
    data: periodosCreateManyCursosInput | periodosCreateManyCursosInput[]
    skipDuplicates?: boolean
  }

  export type disciplinasUpsertWithWhereUniqueWithoutCursosInput = {
    where: disciplinasWhereUniqueInput
    update: XOR<disciplinasUpdateWithoutCursosInput, disciplinasUncheckedUpdateWithoutCursosInput>
    create: XOR<disciplinasCreateWithoutCursosInput, disciplinasUncheckedCreateWithoutCursosInput>
  }

  export type disciplinasUpdateWithWhereUniqueWithoutCursosInput = {
    where: disciplinasWhereUniqueInput
    data: XOR<disciplinasUpdateWithoutCursosInput, disciplinasUncheckedUpdateWithoutCursosInput>
  }

  export type disciplinasUpdateManyWithWhereWithoutCursosInput = {
    where: disciplinasScalarWhereInput
    data: XOR<disciplinasUpdateManyMutationInput, disciplinasUncheckedUpdateManyWithoutCursosInput>
  }

  export type disciplinasScalarWhereInput = {
    AND?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
    OR?: disciplinasScalarWhereInput[]
    NOT?: disciplinasScalarWhereInput | disciplinasScalarWhereInput[]
    id?: IntFilter<"disciplinas"> | number
    nome?: StringFilter<"disciplinas"> | string
    curso_id?: IntFilter<"disciplinas"> | number
    professor_id?: IntNullableFilter<"disciplinas"> | number | null
    created_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"disciplinas"> | Date | string | null
  }

  export type periodosUpsertWithWhereUniqueWithoutCursosInput = {
    where: periodosWhereUniqueInput
    update: XOR<periodosUpdateWithoutCursosInput, periodosUncheckedUpdateWithoutCursosInput>
    create: XOR<periodosCreateWithoutCursosInput, periodosUncheckedCreateWithoutCursosInput>
  }

  export type periodosUpdateWithWhereUniqueWithoutCursosInput = {
    where: periodosWhereUniqueInput
    data: XOR<periodosUpdateWithoutCursosInput, periodosUncheckedUpdateWithoutCursosInput>
  }

  export type periodosUpdateManyWithWhereWithoutCursosInput = {
    where: periodosScalarWhereInput
    data: XOR<periodosUpdateManyMutationInput, periodosUncheckedUpdateManyWithoutCursosInput>
  }

  export type periodosScalarWhereInput = {
    AND?: periodosScalarWhereInput | periodosScalarWhereInput[]
    OR?: periodosScalarWhereInput[]
    NOT?: periodosScalarWhereInput | periodosScalarWhereInput[]
    id?: IntFilter<"periodos"> | number
    ano?: IntFilter<"periodos"> | number
    curso_id?: IntFilter<"periodos"> | number
    created_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"periodos"> | Date | string | null
  }

  export type cursosCreateWithoutDisciplinasInput = {
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    periodos?: periodosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    periodos?: periodosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosCreateOrConnectWithoutDisciplinasInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutDisciplinasInput, cursosUncheckedCreateWithoutDisciplinasInput>
  }

  export type professoresCreateWithoutDisciplinesInput = {
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type professoresUncheckedCreateWithoutDisciplinesInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type professoresCreateOrConnectWithoutDisciplinesInput = {
    where: professoresWhereUniqueInput
    create: XOR<professoresCreateWithoutDisciplinesInput, professoresUncheckedCreateWithoutDisciplinesInput>
  }

  export type notasCreateWithoutDisciplinasInput = {
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alunos: alunosCreateNestedOneWithoutNotasInput
    periodos: periodosCreateNestedOneWithoutNotasInput
  }

  export type notasUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    aluno_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasCreateOrConnectWithoutDisciplinasInput = {
    where: notasWhereUniqueInput
    create: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput>
  }

  export type notasCreateManyDisciplinasInputEnvelope = {
    data: notasCreateManyDisciplinasInput | notasCreateManyDisciplinasInput[]
    skipDuplicates?: boolean
  }

  export type turmasCreateWithoutDisciplinasInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    periodos: periodosCreateNestedOneWithoutTurmasInput
  }

  export type turmasUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    nome: string
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasCreateOrConnectWithoutDisciplinasInput = {
    where: turmasWhereUniqueInput
    create: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput>
  }

  export type turmasCreateManyDisciplinasInputEnvelope = {
    data: turmasCreateManyDisciplinasInput | turmasCreateManyDisciplinasInput[]
    skipDuplicates?: boolean
  }

  export type cursosUpsertWithoutDisciplinasInput = {
    update: XOR<cursosUpdateWithoutDisciplinasInput, cursosUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<cursosCreateWithoutDisciplinasInput, cursosUncheckedCreateWithoutDisciplinasInput>
    where?: cursosWhereInput
  }

  export type cursosUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: cursosWhereInput
    data: XOR<cursosUpdateWithoutDisciplinasInput, cursosUncheckedUpdateWithoutDisciplinasInput>
  }

  export type cursosUpdateWithoutDisciplinasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodos?: periodosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodos?: periodosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type professoresUpsertWithoutDisciplinesInput = {
    update: XOR<professoresUpdateWithoutDisciplinesInput, professoresUncheckedUpdateWithoutDisciplinesInput>
    create: XOR<professoresCreateWithoutDisciplinesInput, professoresUncheckedCreateWithoutDisciplinesInput>
    where?: professoresWhereInput
  }

  export type professoresUpdateToOneWithWhereWithoutDisciplinesInput = {
    where?: professoresWhereInput
    data: XOR<professoresUpdateWithoutDisciplinesInput, professoresUncheckedUpdateWithoutDisciplinesInput>
  }

  export type professoresUpdateWithoutDisciplinesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professoresUncheckedUpdateWithoutDisciplinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: notasWhereUniqueInput
    update: XOR<notasUpdateWithoutDisciplinasInput, notasUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<notasCreateWithoutDisciplinasInput, notasUncheckedCreateWithoutDisciplinasInput>
  }

  export type notasUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: notasWhereUniqueInput
    data: XOR<notasUpdateWithoutDisciplinasInput, notasUncheckedUpdateWithoutDisciplinasInput>
  }

  export type notasUpdateManyWithWhereWithoutDisciplinasInput = {
    where: notasScalarWhereInput
    data: XOR<notasUpdateManyMutationInput, notasUncheckedUpdateManyWithoutDisciplinasInput>
  }

  export type turmasUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: turmasWhereUniqueInput
    update: XOR<turmasUpdateWithoutDisciplinasInput, turmasUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<turmasCreateWithoutDisciplinasInput, turmasUncheckedCreateWithoutDisciplinasInput>
  }

  export type turmasUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: turmasWhereUniqueInput
    data: XOR<turmasUpdateWithoutDisciplinasInput, turmasUncheckedUpdateWithoutDisciplinasInput>
  }

  export type turmasUpdateManyWithWhereWithoutDisciplinasInput = {
    where: turmasScalarWhereInput
    data: XOR<turmasUpdateManyMutationInput, turmasUncheckedUpdateManyWithoutDisciplinasInput>
  }

  export type turmasScalarWhereInput = {
    AND?: turmasScalarWhereInput | turmasScalarWhereInput[]
    OR?: turmasScalarWhereInput[]
    NOT?: turmasScalarWhereInput | turmasScalarWhereInput[]
    id?: IntFilter<"turmas"> | number
    nome?: StringFilter<"turmas"> | string
    disciplina_id?: IntFilter<"turmas"> | number
    periodo_id?: IntFilter<"turmas"> | number
    created_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"turmas"> | Date | string | null
  }

  export type alunosCreateWithoutMatriculasInput = {
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasCreateNestedManyWithoutAlunosInput
  }

  export type alunosUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutAlunosInput
  }

  export type alunosCreateOrConnectWithoutMatriculasInput = {
    where: alunosWhereUniqueInput
    create: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
  }

  export type periodosCreateWithoutMatriculasInput = {
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasCreateNestedManyWithoutPeriodosInput
    cursos: cursosCreateNestedOneWithoutPeriodosInput
    turmas?: turmasCreateNestedManyWithoutPeriodosInput
  }

  export type periodosUncheckedCreateWithoutMatriculasInput = {
    id?: number
    ano: number
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutPeriodosInput
    turmas?: turmasUncheckedCreateNestedManyWithoutPeriodosInput
  }

  export type periodosCreateOrConnectWithoutMatriculasInput = {
    where: periodosWhereUniqueInput
    create: XOR<periodosCreateWithoutMatriculasInput, periodosUncheckedCreateWithoutMatriculasInput>
  }

  export type alunosUpsertWithoutMatriculasInput = {
    update: XOR<alunosUpdateWithoutMatriculasInput, alunosUncheckedUpdateWithoutMatriculasInput>
    create: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
    where?: alunosWhereInput
  }

  export type alunosUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: alunosWhereInput
    data: XOR<alunosUpdateWithoutMatriculasInput, alunosUncheckedUpdateWithoutMatriculasInput>
  }

  export type alunosUpdateWithoutMatriculasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutAlunosNestedInput
  }

  export type periodosUpsertWithoutMatriculasInput = {
    update: XOR<periodosUpdateWithoutMatriculasInput, periodosUncheckedUpdateWithoutMatriculasInput>
    create: XOR<periodosCreateWithoutMatriculasInput, periodosUncheckedCreateWithoutMatriculasInput>
    where?: periodosWhereInput
  }

  export type periodosUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: periodosWhereInput
    data: XOR<periodosUpdateWithoutMatriculasInput, periodosUncheckedUpdateWithoutMatriculasInput>
  }

  export type periodosUpdateWithoutMatriculasInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUpdateManyWithoutPeriodosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutPeriodosNestedInput
    turmas?: turmasUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutPeriodosNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutPeriodosNestedInput
  }

  export type alunosCreateWithoutNotasInput = {
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutAlunosInput
  }

  export type alunosUncheckedCreateWithoutNotasInput = {
    id?: number
    nome: string
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutAlunosInput
  }

  export type alunosCreateOrConnectWithoutNotasInput = {
    where: alunosWhereUniqueInput
    create: XOR<alunosCreateWithoutNotasInput, alunosUncheckedCreateWithoutNotasInput>
  }

  export type disciplinasCreateWithoutNotasInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cursos: cursosCreateNestedOneWithoutDisciplinasInput
    professores?: professoresCreateNestedOneWithoutDisciplinesInput
    turmas?: turmasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutNotasInput = {
    id?: number
    nome: string
    curso_id: number
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    turmas?: turmasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutNotasInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutNotasInput, disciplinasUncheckedCreateWithoutNotasInput>
  }

  export type periodosCreateWithoutNotasInput = {
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutPeriodosInput
    cursos: cursosCreateNestedOneWithoutPeriodosInput
    turmas?: turmasCreateNestedManyWithoutPeriodosInput
  }

  export type periodosUncheckedCreateWithoutNotasInput = {
    id?: number
    ano: number
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutPeriodosInput
    turmas?: turmasUncheckedCreateNestedManyWithoutPeriodosInput
  }

  export type periodosCreateOrConnectWithoutNotasInput = {
    where: periodosWhereUniqueInput
    create: XOR<periodosCreateWithoutNotasInput, periodosUncheckedCreateWithoutNotasInput>
  }

  export type alunosUpsertWithoutNotasInput = {
    update: XOR<alunosUpdateWithoutNotasInput, alunosUncheckedUpdateWithoutNotasInput>
    create: XOR<alunosCreateWithoutNotasInput, alunosUncheckedCreateWithoutNotasInput>
    where?: alunosWhereInput
  }

  export type alunosUpdateToOneWithWhereWithoutNotasInput = {
    where?: alunosWhereInput
    data: XOR<alunosUpdateWithoutNotasInput, alunosUncheckedUpdateWithoutNotasInput>
  }

  export type alunosUpdateWithoutNotasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutAlunosNestedInput
  }

  export type disciplinasUpsertWithoutNotasInput = {
    update: XOR<disciplinasUpdateWithoutNotasInput, disciplinasUncheckedUpdateWithoutNotasInput>
    create: XOR<disciplinasCreateWithoutNotasInput, disciplinasUncheckedCreateWithoutNotasInput>
    where?: disciplinasWhereInput
  }

  export type disciplinasUpdateToOneWithWhereWithoutNotasInput = {
    where?: disciplinasWhereInput
    data: XOR<disciplinasUpdateWithoutNotasInput, disciplinasUncheckedUpdateWithoutNotasInput>
  }

  export type disciplinasUpdateWithoutNotasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: cursosUpdateOneRequiredWithoutDisciplinasNestedInput
    professores?: professoresUpdateOneWithoutDisciplinesNestedInput
    turmas?: turmasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turmas?: turmasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type periodosUpsertWithoutNotasInput = {
    update: XOR<periodosUpdateWithoutNotasInput, periodosUncheckedUpdateWithoutNotasInput>
    create: XOR<periodosCreateWithoutNotasInput, periodosUncheckedCreateWithoutNotasInput>
    where?: periodosWhereInput
  }

  export type periodosUpdateToOneWithWhereWithoutNotasInput = {
    where?: periodosWhereInput
    data: XOR<periodosUpdateWithoutNotasInput, periodosUncheckedUpdateWithoutNotasInput>
  }

  export type periodosUpdateWithoutNotasInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutPeriodosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutPeriodosNestedInput
    turmas?: turmasUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutPeriodosNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutPeriodosNestedInput
  }

  export type matriculasCreateWithoutPeriodosInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alunos: alunosCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateWithoutPeriodosInput = {
    id?: number
    aluno_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasCreateOrConnectWithoutPeriodosInput = {
    where: matriculasWhereUniqueInput
    create: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput>
  }

  export type matriculasCreateManyPeriodosInputEnvelope = {
    data: matriculasCreateManyPeriodosInput | matriculasCreateManyPeriodosInput[]
    skipDuplicates?: boolean
  }

  export type notasCreateWithoutPeriodosInput = {
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alunos: alunosCreateNestedOneWithoutNotasInput
    disciplinas: disciplinasCreateNestedOneWithoutNotasInput
  }

  export type notasUncheckedCreateWithoutPeriodosInput = {
    id?: number
    aluno_id: number
    disciplina_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasCreateOrConnectWithoutPeriodosInput = {
    where: notasWhereUniqueInput
    create: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput>
  }

  export type notasCreateManyPeriodosInputEnvelope = {
    data: notasCreateManyPeriodosInput | notasCreateManyPeriodosInput[]
    skipDuplicates?: boolean
  }

  export type cursosCreateWithoutPeriodosInput = {
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas?: disciplinasCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateWithoutPeriodosInput = {
    id?: number
    nome: string
    descricao?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas?: disciplinasUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosCreateOrConnectWithoutPeriodosInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutPeriodosInput, cursosUncheckedCreateWithoutPeriodosInput>
  }

  export type turmasCreateWithoutPeriodosInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    disciplinas: disciplinasCreateNestedOneWithoutTurmasInput
  }

  export type turmasUncheckedCreateWithoutPeriodosInput = {
    id?: number
    nome: string
    disciplina_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasCreateOrConnectWithoutPeriodosInput = {
    where: turmasWhereUniqueInput
    create: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput>
  }

  export type turmasCreateManyPeriodosInputEnvelope = {
    data: turmasCreateManyPeriodosInput | turmasCreateManyPeriodosInput[]
    skipDuplicates?: boolean
  }

  export type matriculasUpsertWithWhereUniqueWithoutPeriodosInput = {
    where: matriculasWhereUniqueInput
    update: XOR<matriculasUpdateWithoutPeriodosInput, matriculasUncheckedUpdateWithoutPeriodosInput>
    create: XOR<matriculasCreateWithoutPeriodosInput, matriculasUncheckedCreateWithoutPeriodosInput>
  }

  export type matriculasUpdateWithWhereUniqueWithoutPeriodosInput = {
    where: matriculasWhereUniqueInput
    data: XOR<matriculasUpdateWithoutPeriodosInput, matriculasUncheckedUpdateWithoutPeriodosInput>
  }

  export type matriculasUpdateManyWithWhereWithoutPeriodosInput = {
    where: matriculasScalarWhereInput
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyWithoutPeriodosInput>
  }

  export type notasUpsertWithWhereUniqueWithoutPeriodosInput = {
    where: notasWhereUniqueInput
    update: XOR<notasUpdateWithoutPeriodosInput, notasUncheckedUpdateWithoutPeriodosInput>
    create: XOR<notasCreateWithoutPeriodosInput, notasUncheckedCreateWithoutPeriodosInput>
  }

  export type notasUpdateWithWhereUniqueWithoutPeriodosInput = {
    where: notasWhereUniqueInput
    data: XOR<notasUpdateWithoutPeriodosInput, notasUncheckedUpdateWithoutPeriodosInput>
  }

  export type notasUpdateManyWithWhereWithoutPeriodosInput = {
    where: notasScalarWhereInput
    data: XOR<notasUpdateManyMutationInput, notasUncheckedUpdateManyWithoutPeriodosInput>
  }

  export type cursosUpsertWithoutPeriodosInput = {
    update: XOR<cursosUpdateWithoutPeriodosInput, cursosUncheckedUpdateWithoutPeriodosInput>
    create: XOR<cursosCreateWithoutPeriodosInput, cursosUncheckedCreateWithoutPeriodosInput>
    where?: cursosWhereInput
  }

  export type cursosUpdateToOneWithWhereWithoutPeriodosInput = {
    where?: cursosWhereInput
    data: XOR<cursosUpdateWithoutPeriodosInput, cursosUncheckedUpdateWithoutPeriodosInput>
  }

  export type cursosUpdateWithoutPeriodosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type turmasUpsertWithWhereUniqueWithoutPeriodosInput = {
    where: turmasWhereUniqueInput
    update: XOR<turmasUpdateWithoutPeriodosInput, turmasUncheckedUpdateWithoutPeriodosInput>
    create: XOR<turmasCreateWithoutPeriodosInput, turmasUncheckedCreateWithoutPeriodosInput>
  }

  export type turmasUpdateWithWhereUniqueWithoutPeriodosInput = {
    where: turmasWhereUniqueInput
    data: XOR<turmasUpdateWithoutPeriodosInput, turmasUncheckedUpdateWithoutPeriodosInput>
  }

  export type turmasUpdateManyWithWhereWithoutPeriodosInput = {
    where: turmasScalarWhereInput
    data: XOR<turmasUpdateManyMutationInput, turmasUncheckedUpdateManyWithoutPeriodosInput>
  }

  export type disciplinasCreateWithoutProfessoresInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cursos: cursosCreateNestedOneWithoutDisciplinasInput
    notas?: notasCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutProfessoresInput = {
    id?: number
    nome: string
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutDisciplinasInput
    turmas?: turmasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutProfessoresInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput>
  }

  export type disciplinasCreateManyProfessoresInputEnvelope = {
    data: disciplinasCreateManyProfessoresInput | disciplinasCreateManyProfessoresInput[]
    skipDuplicates?: boolean
  }

  export type disciplinasUpsertWithWhereUniqueWithoutProfessoresInput = {
    where: disciplinasWhereUniqueInput
    update: XOR<disciplinasUpdateWithoutProfessoresInput, disciplinasUncheckedUpdateWithoutProfessoresInput>
    create: XOR<disciplinasCreateWithoutProfessoresInput, disciplinasUncheckedCreateWithoutProfessoresInput>
  }

  export type disciplinasUpdateWithWhereUniqueWithoutProfessoresInput = {
    where: disciplinasWhereUniqueInput
    data: XOR<disciplinasUpdateWithoutProfessoresInput, disciplinasUncheckedUpdateWithoutProfessoresInput>
  }

  export type disciplinasUpdateManyWithWhereWithoutProfessoresInput = {
    where: disciplinasScalarWhereInput
    data: XOR<disciplinasUpdateManyMutationInput, disciplinasUncheckedUpdateManyWithoutProfessoresInput>
  }

  export type disciplinasCreateWithoutTurmasInput = {
    nome: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cursos: cursosCreateNestedOneWithoutDisciplinasInput
    professores?: professoresCreateNestedOneWithoutDisciplinesInput
    notas?: notasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutTurmasInput = {
    id?: number
    nome: string
    curso_id: number
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notas?: notasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutTurmasInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutTurmasInput, disciplinasUncheckedCreateWithoutTurmasInput>
  }

  export type periodosCreateWithoutTurmasInput = {
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasCreateNestedManyWithoutPeriodosInput
    notas?: notasCreateNestedManyWithoutPeriodosInput
    cursos: cursosCreateNestedOneWithoutPeriodosInput
  }

  export type periodosUncheckedCreateWithoutTurmasInput = {
    id?: number
    ano: number
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    matriculas?: matriculasUncheckedCreateNestedManyWithoutPeriodosInput
    notas?: notasUncheckedCreateNestedManyWithoutPeriodosInput
  }

  export type periodosCreateOrConnectWithoutTurmasInput = {
    where: periodosWhereUniqueInput
    create: XOR<periodosCreateWithoutTurmasInput, periodosUncheckedCreateWithoutTurmasInput>
  }

  export type disciplinasUpsertWithoutTurmasInput = {
    update: XOR<disciplinasUpdateWithoutTurmasInput, disciplinasUncheckedUpdateWithoutTurmasInput>
    create: XOR<disciplinasCreateWithoutTurmasInput, disciplinasUncheckedCreateWithoutTurmasInput>
    where?: disciplinasWhereInput
  }

  export type disciplinasUpdateToOneWithWhereWithoutTurmasInput = {
    where?: disciplinasWhereInput
    data: XOR<disciplinasUpdateWithoutTurmasInput, disciplinasUncheckedUpdateWithoutTurmasInput>
  }

  export type disciplinasUpdateWithoutTurmasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: cursosUpdateOneRequiredWithoutDisciplinasNestedInput
    professores?: professoresUpdateOneWithoutDisciplinesNestedInput
    notas?: notasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type periodosUpsertWithoutTurmasInput = {
    update: XOR<periodosUpdateWithoutTurmasInput, periodosUncheckedUpdateWithoutTurmasInput>
    create: XOR<periodosCreateWithoutTurmasInput, periodosUncheckedCreateWithoutTurmasInput>
    where?: periodosWhereInput
  }

  export type periodosUpdateToOneWithWhereWithoutTurmasInput = {
    where?: periodosWhereInput
    data: XOR<periodosUpdateWithoutTurmasInput, periodosUncheckedUpdateWithoutTurmasInput>
  }

  export type periodosUpdateWithoutTurmasInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutPeriodosNestedInput
    notas?: notasUpdateManyWithoutPeriodosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutPeriodosNestedInput
    notas?: notasUncheckedUpdateManyWithoutPeriodosNestedInput
  }

  export type matriculasCreateManyAlunosInput = {
    id?: number
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasCreateManyAlunosInput = {
    id?: number
    disciplina_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasUpdateWithoutAlunosInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodos?: periodosUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasUncheckedUpdateManyWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUpdateWithoutAlunosInput = {
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateOneRequiredWithoutNotasNestedInput
    periodos?: periodosUpdateOneRequiredWithoutNotasNestedInput
  }

  export type notasUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUncheckedUpdateManyWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disciplinasCreateManyCursosInput = {
    id?: number
    nome: string
    professor_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type periodosCreateManyCursosInput = {
    id?: number
    ano: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type disciplinasUpdateWithoutCursosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    professores?: professoresUpdateOneWithoutDisciplinesNestedInput
    notas?: notasUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateManyWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type periodosUpdateWithoutCursosInput = {
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUpdateManyWithoutPeriodosNestedInput
    notas?: notasUpdateManyWithoutPeriodosNestedInput
    turmas?: turmasUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matriculas?: matriculasUncheckedUpdateManyWithoutPeriodosNestedInput
    notas?: notasUncheckedUpdateManyWithoutPeriodosNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutPeriodosNestedInput
  }

  export type periodosUncheckedUpdateManyWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasCreateManyDisciplinasInput = {
    id?: number
    aluno_id: number
    periodo_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasCreateManyDisciplinasInput = {
    id?: number
    nome: string
    periodo_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasUpdateWithoutDisciplinasInput = {
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alunos?: alunosUpdateOneRequiredWithoutNotasNestedInput
    periodos?: periodosUpdateOneRequiredWithoutNotasNestedInput
  }

  export type notasUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUncheckedUpdateManyWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasUpdateWithoutDisciplinasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodos?: periodosUpdateOneRequiredWithoutTurmasNestedInput
  }

  export type turmasUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasUncheckedUpdateManyWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    periodo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasCreateManyPeriodosInput = {
    id?: number
    aluno_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notasCreateManyPeriodosInput = {
    id?: number
    aluno_id: number
    disciplina_id: number
    tipo_nota_id: number
    valor: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type turmasCreateManyPeriodosInput = {
    id?: number
    nome: string
    disciplina_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type matriculasUpdateWithoutPeriodosInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alunos?: alunosUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matriculasUncheckedUpdateManyWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUpdateWithoutPeriodosInput = {
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alunos?: alunosUpdateOneRequiredWithoutNotasNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutNotasNestedInput
  }

  export type notasUncheckedUpdateWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notasUncheckedUpdateManyWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    aluno_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    tipo_nota_id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasUpdateWithoutPeriodosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateOneRequiredWithoutTurmasNestedInput
  }

  export type turmasUncheckedUpdateWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type turmasUncheckedUpdateManyWithoutPeriodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type disciplinasCreateManyProfessoresInput = {
    id?: number
    nome: string
    curso_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type disciplinasUpdateWithoutProfessoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: cursosUpdateOneRequiredWithoutDisciplinasNestedInput
    notas?: notasUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutProfessoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas?: notasUncheckedUpdateManyWithoutDisciplinasNestedInput
    turmas?: turmasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateManyWithoutProfessoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    curso_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}