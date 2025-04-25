
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
 * Model Plano
 * 
 */
export type Plano = $Result.DefaultSelection<Prisma.$PlanoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model AlunoTurma
 * 
 */
export type AlunoTurma = $Result.DefaultSelection<Prisma.$AlunoTurmaPayload>
/**
 * Model Modulo
 * 
 */
export type Modulo = $Result.DefaultSelection<Prisma.$ModuloPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Apostila
 * 
 */
export type Apostila = $Result.DefaultSelection<Prisma.$ApostilaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model ProgressoVideo
 * 
 */
export type ProgressoVideo = $Result.DefaultSelection<Prisma.$ProgressoVideoPayload>
/**
 * Model ProgressoApostila
 * 
 */
export type ProgressoApostila = $Result.DefaultSelection<Prisma.$ProgressoApostilaPayload>
/**
 * Model ProgressoAvaliacao
 * 
 */
export type ProgressoAvaliacao = $Result.DefaultSelection<Prisma.$ProgressoAvaliacaoPayload>
/**
 * Model Parceria
 * 
 */
export type Parceria = $Result.DefaultSelection<Prisma.$ParceriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  ALUNO: 'ALUNO',
  PROFESSOR: 'PROFESSOR',
  ADMIN: 'ADMIN'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Planos
 * const planos = await prisma.plano.findMany()
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
   * // Fetch zero or more Planos
   * const planos = await prisma.plano.findMany()
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
   * `prisma.plano`: Exposes CRUD operations for the **Plano** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planos
    * const planos = await prisma.plano.findMany()
    * ```
    */
  get plano(): Prisma.PlanoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alunoTurma`: Exposes CRUD operations for the **AlunoTurma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlunoTurmas
    * const alunoTurmas = await prisma.alunoTurma.findMany()
    * ```
    */
  get alunoTurma(): Prisma.AlunoTurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **Modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.ModuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apostila`: Exposes CRUD operations for the **Apostila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apostilas
    * const apostilas = await prisma.apostila.findMany()
    * ```
    */
  get apostila(): Prisma.ApostilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoVideo`: Exposes CRUD operations for the **ProgressoVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressoVideos
    * const progressoVideos = await prisma.progressoVideo.findMany()
    * ```
    */
  get progressoVideo(): Prisma.ProgressoVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoApostila`: Exposes CRUD operations for the **ProgressoApostila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressoApostilas
    * const progressoApostilas = await prisma.progressoApostila.findMany()
    * ```
    */
  get progressoApostila(): Prisma.ProgressoApostilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoAvaliacao`: Exposes CRUD operations for the **ProgressoAvaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressoAvaliacaos
    * const progressoAvaliacaos = await prisma.progressoAvaliacao.findMany()
    * ```
    */
  get progressoAvaliacao(): Prisma.ProgressoAvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parceria`: Exposes CRUD operations for the **Parceria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcerias
    * const parcerias = await prisma.parceria.findMany()
    * ```
    */
  get parceria(): Prisma.ParceriaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Plano: 'Plano',
    Categoria: 'Categoria',
    Usuario: 'Usuario',
    Curso: 'Curso',
    Turma: 'Turma',
    AlunoTurma: 'AlunoTurma',
    Modulo: 'Modulo',
    Video: 'Video',
    Apostila: 'Apostila',
    Avaliacao: 'Avaliacao',
    ProgressoVideo: 'ProgressoVideo',
    ProgressoApostila: 'ProgressoApostila',
    ProgressoAvaliacao: 'ProgressoAvaliacao',
    Parceria: 'Parceria'
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
      modelProps: "plano" | "categoria" | "usuario" | "curso" | "turma" | "alunoTurma" | "modulo" | "video" | "apostila" | "avaliacao" | "progressoVideo" | "progressoApostila" | "progressoAvaliacao" | "parceria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Plano: {
        payload: Prisma.$PlanoPayload<ExtArgs>
        fields: Prisma.PlanoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findFirst: {
            args: Prisma.PlanoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findMany: {
            args: Prisma.PlanoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>[]
          }
          create: {
            args: Prisma.PlanoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          createMany: {
            args: Prisma.PlanoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          update: {
            args: Prisma.PlanoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          deleteMany: {
            args: Prisma.PlanoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          aggregate: {
            args: Prisma.PlanoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlano>
          }
          groupBy: {
            args: Prisma.PlanoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      AlunoTurma: {
        payload: Prisma.$AlunoTurmaPayload<ExtArgs>
        fields: Prisma.AlunoTurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoTurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoTurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          findFirst: {
            args: Prisma.AlunoTurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoTurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          findMany: {
            args: Prisma.AlunoTurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>[]
          }
          create: {
            args: Prisma.AlunoTurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          createMany: {
            args: Prisma.AlunoTurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoTurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          update: {
            args: Prisma.AlunoTurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          deleteMany: {
            args: Prisma.AlunoTurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoTurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoTurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          aggregate: {
            args: Prisma.AlunoTurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunoTurma>
          }
          groupBy: {
            args: Prisma.AlunoTurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoTurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoTurmaCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoTurmaCountAggregateOutputType> | number
          }
        }
      }
      Modulo: {
        payload: Prisma.$ModuloPayload<ExtArgs>
        fields: Prisma.ModuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findFirst: {
            args: Prisma.ModuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findMany: {
            args: Prisma.ModuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          create: {
            args: Prisma.ModuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          createMany: {
            args: Prisma.ModuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          update: {
            args: Prisma.ModuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          deleteMany: {
            args: Prisma.ModuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.ModuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Apostila: {
        payload: Prisma.$ApostilaPayload<ExtArgs>
        fields: Prisma.ApostilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApostilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApostilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          findFirst: {
            args: Prisma.ApostilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApostilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          findMany: {
            args: Prisma.ApostilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>[]
          }
          create: {
            args: Prisma.ApostilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          createMany: {
            args: Prisma.ApostilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApostilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          update: {
            args: Prisma.ApostilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          deleteMany: {
            args: Prisma.ApostilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApostilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApostilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          aggregate: {
            args: Prisma.ApostilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApostila>
          }
          groupBy: {
            args: Prisma.ApostilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApostilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApostilaCountArgs<ExtArgs>
            result: $Utils.Optional<ApostilaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      ProgressoVideo: {
        payload: Prisma.$ProgressoVideoPayload<ExtArgs>
        fields: Prisma.ProgressoVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          findFirst: {
            args: Prisma.ProgressoVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          findMany: {
            args: Prisma.ProgressoVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>[]
          }
          create: {
            args: Prisma.ProgressoVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          createMany: {
            args: Prisma.ProgressoVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgressoVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          update: {
            args: Prisma.ProgressoVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgressoVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoVideoPayload>
          }
          aggregate: {
            args: Prisma.ProgressoVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoVideo>
          }
          groupBy: {
            args: Prisma.ProgressoVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoVideoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoVideoCountAggregateOutputType> | number
          }
        }
      }
      ProgressoApostila: {
        payload: Prisma.$ProgressoApostilaPayload<ExtArgs>
        fields: Prisma.ProgressoApostilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoApostilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoApostilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          findFirst: {
            args: Prisma.ProgressoApostilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoApostilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          findMany: {
            args: Prisma.ProgressoApostilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>[]
          }
          create: {
            args: Prisma.ProgressoApostilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          createMany: {
            args: Prisma.ProgressoApostilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgressoApostilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          update: {
            args: Prisma.ProgressoApostilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoApostilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoApostilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgressoApostilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoApostilaPayload>
          }
          aggregate: {
            args: Prisma.ProgressoApostilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoApostila>
          }
          groupBy: {
            args: Prisma.ProgressoApostilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoApostilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoApostilaCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoApostilaCountAggregateOutputType> | number
          }
        }
      }
      ProgressoAvaliacao: {
        payload: Prisma.$ProgressoAvaliacaoPayload<ExtArgs>
        fields: Prisma.ProgressoAvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoAvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.ProgressoAvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoAvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          findMany: {
            args: Prisma.ProgressoAvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>[]
          }
          create: {
            args: Prisma.ProgressoAvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          createMany: {
            args: Prisma.ProgressoAvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgressoAvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          update: {
            args: Prisma.ProgressoAvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoAvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoAvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgressoAvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.ProgressoAvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoAvaliacao>
          }
          groupBy: {
            args: Prisma.ProgressoAvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoAvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Parceria: {
        payload: Prisma.$ParceriaPayload<ExtArgs>
        fields: Prisma.ParceriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParceriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParceriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          findFirst: {
            args: Prisma.ParceriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParceriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          findMany: {
            args: Prisma.ParceriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>[]
          }
          create: {
            args: Prisma.ParceriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          createMany: {
            args: Prisma.ParceriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParceriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          update: {
            args: Prisma.ParceriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          deleteMany: {
            args: Prisma.ParceriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParceriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParceriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          aggregate: {
            args: Prisma.ParceriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParceria>
          }
          groupBy: {
            args: Prisma.ParceriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParceriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParceriaCountArgs<ExtArgs>
            result: $Utils.Optional<ParceriaCountAggregateOutputType> | number
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
    plano?: PlanoOmit
    categoria?: CategoriaOmit
    usuario?: UsuarioOmit
    curso?: CursoOmit
    turma?: TurmaOmit
    alunoTurma?: AlunoTurmaOmit
    modulo?: ModuloOmit
    video?: VideoOmit
    apostila?: ApostilaOmit
    avaliacao?: AvaliacaoOmit
    progressoVideo?: ProgressoVideoOmit
    progressoApostila?: ProgressoApostilaOmit
    progressoAvaliacao?: ProgressoAvaliacaoOmit
    parceria?: ParceriaOmit
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
   * Count Type PlanoCountOutputType
   */

  export type PlanoCountOutputType = {
    usuarios: number
  }

  export type PlanoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PlanoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoCountOutputType
     */
    select?: PlanoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    cursos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | CategoriaCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    progressoVideos: number
    progressoApostilas: number
    progressoAvaliacoes: number
    turmasComoAluno: number
    turmasComoProfessor: number
    parcerias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressoVideos?: boolean | UsuarioCountOutputTypeCountProgressoVideosArgs
    progressoApostilas?: boolean | UsuarioCountOutputTypeCountProgressoApostilasArgs
    progressoAvaliacoes?: boolean | UsuarioCountOutputTypeCountProgressoAvaliacoesArgs
    turmasComoAluno?: boolean | UsuarioCountOutputTypeCountTurmasComoAlunoArgs
    turmasComoProfessor?: boolean | UsuarioCountOutputTypeCountTurmasComoProfessorArgs
    parcerias?: boolean | UsuarioCountOutputTypeCountParceriasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoVideoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoApostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoApostilaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAvaliacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurmasComoAlunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurmasComoProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParceriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceriaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    turmas: number
    modulos: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | CursoCountOutputTypeCountTurmasArgs
    modulos?: boolean | CursoCountOutputTypeCountModulosArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountModulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunos: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
  }


  /**
   * Count Type ModuloCountOutputType
   */

  export type ModuloCountOutputType = {
    videos: number
    apostilas: number
    avaliacoes: number
  }

  export type ModuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ModuloCountOutputTypeCountVideosArgs
    apostilas?: boolean | ModuloCountOutputTypeCountApostilasArgs
    avaliacoes?: boolean | ModuloCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuloCountOutputType
     */
    select?: ModuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountApostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApostilaWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    progresso: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | VideoCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoVideoWhereInput
  }


  /**
   * Count Type ApostilaCountOutputType
   */

  export type ApostilaCountOutputType = {
    progresso: number
  }

  export type ApostilaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | ApostilaCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApostilaCountOutputType
     */
    select?: ApostilaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoApostilaWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    progresso: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | AvaliacaoCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAvaliacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Plano
   */

  export type AggregatePlano = {
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  export type PlanoAvgAggregateOutputType = {
    id: number | null
  }

  export type PlanoSumAggregateOutputType = {
    id: number | null
  }

  export type PlanoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanoAvgAggregateInputType = {
    id?: true
  }

  export type PlanoSumAggregateInputType = {
    id?: true
  }

  export type PlanoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plano to aggregate.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planos
    **/
    _count?: true | PlanoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanoMaxAggregateInputType
  }

  export type GetPlanoAggregateType<T extends PlanoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlano]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlano[P]>
      : GetScalarType<T[P], AggregatePlano[P]>
  }




  export type PlanoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanoWhereInput
    orderBy?: PlanoOrderByWithAggregationInput | PlanoOrderByWithAggregationInput[]
    by: PlanoScalarFieldEnum[] | PlanoScalarFieldEnum
    having?: PlanoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanoCountAggregateInputType | true
    _avg?: PlanoAvgAggregateInputType
    _sum?: PlanoSumAggregateInputType
    _min?: PlanoMinAggregateInputType
    _max?: PlanoMaxAggregateInputType
  }

  export type PlanoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  type GetPlanoGroupByPayload<T extends PlanoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanoGroupByOutputType[P]>
        }
      >
    >


  export type PlanoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Plano$usuariosArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plano"]>



  export type PlanoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["plano"]>
  export type PlanoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Plano$usuariosArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlanoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plano"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plano"]>
    composites: {}
  }

  type PlanoGetPayload<S extends boolean | null | undefined | PlanoDefaultArgs> = $Result.GetResult<Prisma.$PlanoPayload, S>

  type PlanoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanoCountAggregateInputType | true
    }

  export interface PlanoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plano'], meta: { name: 'Plano' } }
    /**
     * Find zero or one Plano that matches the filter.
     * @param {PlanoFindUniqueArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanoFindUniqueArgs>(args: SelectSubset<T, PlanoFindUniqueArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plano that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanoFindUniqueOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanoFindFirstArgs>(args?: SelectSubset<T, PlanoFindFirstArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planos
     * const planos = await prisma.plano.findMany()
     * 
     * // Get first 10 Planos
     * const planos = await prisma.plano.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planoWithIdOnly = await prisma.plano.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanoFindManyArgs>(args?: SelectSubset<T, PlanoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plano.
     * @param {PlanoCreateArgs} args - Arguments to create a Plano.
     * @example
     * // Create one Plano
     * const Plano = await prisma.plano.create({
     *   data: {
     *     // ... data to create a Plano
     *   }
     * })
     * 
     */
    create<T extends PlanoCreateArgs>(args: SelectSubset<T, PlanoCreateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planos.
     * @param {PlanoCreateManyArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const plano = await prisma.plano.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanoCreateManyArgs>(args?: SelectSubset<T, PlanoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plano.
     * @param {PlanoDeleteArgs} args - Arguments to delete one Plano.
     * @example
     * // Delete one Plano
     * const Plano = await prisma.plano.delete({
     *   where: {
     *     // ... filter to delete one Plano
     *   }
     * })
     * 
     */
    delete<T extends PlanoDeleteArgs>(args: SelectSubset<T, PlanoDeleteArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plano.
     * @param {PlanoUpdateArgs} args - Arguments to update one Plano.
     * @example
     * // Update one Plano
     * const plano = await prisma.plano.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanoUpdateArgs>(args: SelectSubset<T, PlanoUpdateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planos.
     * @param {PlanoDeleteManyArgs} args - Arguments to filter Planos to delete.
     * @example
     * // Delete a few Planos
     * const { count } = await prisma.plano.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanoDeleteManyArgs>(args?: SelectSubset<T, PlanoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planos
     * const plano = await prisma.plano.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanoUpdateManyArgs>(args: SelectSubset<T, PlanoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plano.
     * @param {PlanoUpsertArgs} args - Arguments to update or create a Plano.
     * @example
     * // Update or create a Plano
     * const plano = await prisma.plano.upsert({
     *   create: {
     *     // ... data to create a Plano
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plano we want to update
     *   }
     * })
     */
    upsert<T extends PlanoUpsertArgs>(args: SelectSubset<T, PlanoUpsertArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoCountArgs} args - Arguments to filter Planos to count.
     * @example
     * // Count the number of Planos
     * const count = await prisma.plano.count({
     *   where: {
     *     // ... the filter for the Planos we want to count
     *   }
     * })
    **/
    count<T extends PlanoCountArgs>(
      args?: Subset<T, PlanoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanoAggregateArgs>(args: Subset<T, PlanoAggregateArgs>): Prisma.PrismaPromise<GetPlanoAggregateType<T>>

    /**
     * Group by Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoGroupByArgs} args - Group by arguments.
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
      T extends PlanoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanoGroupByArgs['orderBy'] }
        : { orderBy?: PlanoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plano model
   */
  readonly fields: PlanoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plano.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Plano$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Plano$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plano model
   */
  interface PlanoFieldRefs {
    readonly id: FieldRef<"Plano", 'Int'>
    readonly nome: FieldRef<"Plano", 'String'>
    readonly descricao: FieldRef<"Plano", 'String'>
    readonly createdAt: FieldRef<"Plano", 'DateTime'>
    readonly updatedAt: FieldRef<"Plano", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plano findUnique
   */
  export type PlanoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findUniqueOrThrow
   */
  export type PlanoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findFirst
   */
  export type PlanoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findFirstOrThrow
   */
  export type PlanoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findMany
   */
  export type PlanoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Planos to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano create
   */
  export type PlanoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plano.
     */
    data: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
  }

  /**
   * Plano createMany
   */
  export type PlanoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planos.
     */
    data: PlanoCreateManyInput | PlanoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plano update
   */
  export type PlanoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plano.
     */
    data: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
    /**
     * Choose, which Plano to update.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano updateMany
   */
  export type PlanoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planos.
     */
    data: XOR<PlanoUpdateManyMutationInput, PlanoUncheckedUpdateManyInput>
    /**
     * Filter which Planos to update
     */
    where?: PlanoWhereInput
    /**
     * Limit how many Planos to update.
     */
    limit?: number
  }

  /**
   * Plano upsert
   */
  export type PlanoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plano to update in case it exists.
     */
    where: PlanoWhereUniqueInput
    /**
     * In case the Plano found by the `where` argument doesn't exist, create a new Plano with this data.
     */
    create: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
    /**
     * In case the Plano was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
  }

  /**
   * Plano delete
   */
  export type PlanoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter which Plano to delete.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano deleteMany
   */
  export type PlanoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planos to delete
     */
    where?: PlanoWhereInput
    /**
     * Limit how many Planos to delete.
     */
    limit?: number
  }

  /**
   * Plano.usuarios
   */
  export type Plano$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Plano without action
   */
  export type PlanoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cursos?: boolean | Categoria$cursosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Categoria$cursosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Categoria$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.cursos
   */
  export type Categoria$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    dataCadastro: Date | null
    planoId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    dataCadastro: Date | null
    planoId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    dataCadastro: number
    planoId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro: Date
    planoId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
    progressoVideos?: boolean | Usuario$progressoVideosArgs<ExtArgs>
    progressoApostilas?: boolean | Usuario$progressoApostilasArgs<ExtArgs>
    progressoAvaliacoes?: boolean | Usuario$progressoAvaliacoesArgs<ExtArgs>
    turmasComoAluno?: boolean | Usuario$turmasComoAlunoArgs<ExtArgs>
    turmasComoProfessor?: boolean | Usuario$turmasComoProfessorArgs<ExtArgs>
    parcerias?: boolean | Usuario$parceriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo" | "dataCadastro" | "planoId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
    progressoVideos?: boolean | Usuario$progressoVideosArgs<ExtArgs>
    progressoApostilas?: boolean | Usuario$progressoApostilasArgs<ExtArgs>
    progressoAvaliacoes?: boolean | Usuario$progressoAvaliacoesArgs<ExtArgs>
    turmasComoAluno?: boolean | Usuario$turmasComoAlunoArgs<ExtArgs>
    turmasComoProfessor?: boolean | Usuario$turmasComoProfessorArgs<ExtArgs>
    parcerias?: boolean | Usuario$parceriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      plano: Prisma.$PlanoPayload<ExtArgs>
      progressoVideos: Prisma.$ProgressoVideoPayload<ExtArgs>[]
      progressoApostilas: Prisma.$ProgressoApostilaPayload<ExtArgs>[]
      progressoAvaliacoes: Prisma.$ProgressoAvaliacaoPayload<ExtArgs>[]
      turmasComoAluno: Prisma.$AlunoTurmaPayload<ExtArgs>[]
      turmasComoProfessor: Prisma.$TurmaPayload<ExtArgs>[]
      parcerias: Prisma.$ParceriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      tipo: $Enums.TipoUsuario
      dataCadastro: Date
      planoId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plano<T extends PlanoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanoDefaultArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressoVideos<T extends Usuario$progressoVideosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progressoVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressoApostilas<T extends Usuario$progressoApostilasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progressoApostilasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressoAvaliacoes<T extends Usuario$progressoAvaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progressoAvaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turmasComoAluno<T extends Usuario$turmasComoAlunoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$turmasComoAlunoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turmasComoProfessor<T extends Usuario$turmasComoProfessorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$turmasComoProfessorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parcerias<T extends Usuario$parceriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$parceriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
    readonly dataCadastro: FieldRef<"Usuario", 'DateTime'>
    readonly planoId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.progressoVideos
   */
  export type Usuario$progressoVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    where?: ProgressoVideoWhereInput
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    cursor?: ProgressoVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoVideoScalarFieldEnum | ProgressoVideoScalarFieldEnum[]
  }

  /**
   * Usuario.progressoApostilas
   */
  export type Usuario$progressoApostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    where?: ProgressoApostilaWhereInput
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    cursor?: ProgressoApostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoApostilaScalarFieldEnum | ProgressoApostilaScalarFieldEnum[]
  }

  /**
   * Usuario.progressoAvaliacoes
   */
  export type Usuario$progressoAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    where?: ProgressoAvaliacaoWhereInput
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAvaliacaoScalarFieldEnum | ProgressoAvaliacaoScalarFieldEnum[]
  }

  /**
   * Usuario.turmasComoAluno
   */
  export type Usuario$turmasComoAlunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    cursor?: AlunoTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * Usuario.turmasComoProfessor
   */
  export type Usuario$turmasComoProfessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Usuario.parcerias
   */
  export type Usuario$parceriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    where?: ParceriaWhereInput
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    cursor?: ParceriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    cargaHoraria: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    cargaHoraria: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
    cargaHoraria: number | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
    cargaHoraria: number | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoriaId: number
    cargaHoraria: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    categoriaId?: true
    cargaHoraria?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    categoriaId?: true
    cargaHoraria?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    cargaHoraria?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    cargaHoraria?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    cargaHoraria?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    categoriaId: number
    cargaHoraria: number
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    cargaHoraria?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>



  export type CursoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    cargaHoraria?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "categoriaId" | "cargaHoraria", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
      modulos: Prisma.$ModuloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      categoriaId: number
      cargaHoraria: number
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turmas<T extends Curso$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modulos<T extends Curso$modulosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$modulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly titulo: FieldRef<"Curso", 'String'>
    readonly descricao: FieldRef<"Curso", 'String'>
    readonly categoriaId: FieldRef<"Curso", 'Int'>
    readonly cargaHoraria: FieldRef<"Curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.turmas
   */
  export type Curso$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso.modulos
   */
  export type Curso$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    cursor?: ModuloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    cursoId: number
    professorId: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: number
    nome: string
    cursoId: number
    professorId: number
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | UsuarioDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>



  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cursoId" | "professorId", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | UsuarioDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      professor: Prisma.$UsuarioPayload<ExtArgs>
      alunos: Prisma.$AlunoTurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cursoId: number
      professorId: number
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'Int'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly cursoId: FieldRef<"Turma", 'Int'>
    readonly professorId: FieldRef<"Turma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    cursor?: AlunoTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model AlunoTurma
   */

  export type AggregateAlunoTurma = {
    _count: AlunoTurmaCountAggregateOutputType | null
    _avg: AlunoTurmaAvgAggregateOutputType | null
    _sum: AlunoTurmaSumAggregateOutputType | null
    _min: AlunoTurmaMinAggregateOutputType | null
    _max: AlunoTurmaMaxAggregateOutputType | null
  }

  export type AlunoTurmaAvgAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaSumAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaMinAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaMaxAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaCountAggregateOutputType = {
    alunoId: number
    turmaId: number
    _all: number
  }


  export type AlunoTurmaAvgAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaSumAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaMinAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaMaxAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaCountAggregateInputType = {
    alunoId?: true
    turmaId?: true
    _all?: true
  }

  export type AlunoTurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunoTurma to aggregate.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlunoTurmas
    **/
    _count?: true | AlunoTurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoTurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoTurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoTurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoTurmaMaxAggregateInputType
  }

  export type GetAlunoTurmaAggregateType<T extends AlunoTurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunoTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunoTurma[P]>
      : GetScalarType<T[P], AggregateAlunoTurma[P]>
  }




  export type AlunoTurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithAggregationInput | AlunoTurmaOrderByWithAggregationInput[]
    by: AlunoTurmaScalarFieldEnum[] | AlunoTurmaScalarFieldEnum
    having?: AlunoTurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoTurmaCountAggregateInputType | true
    _avg?: AlunoTurmaAvgAggregateInputType
    _sum?: AlunoTurmaSumAggregateInputType
    _min?: AlunoTurmaMinAggregateInputType
    _max?: AlunoTurmaMaxAggregateInputType
  }

  export type AlunoTurmaGroupByOutputType = {
    alunoId: number
    turmaId: number
    _count: AlunoTurmaCountAggregateOutputType | null
    _avg: AlunoTurmaAvgAggregateOutputType | null
    _sum: AlunoTurmaSumAggregateOutputType | null
    _min: AlunoTurmaMinAggregateOutputType | null
    _max: AlunoTurmaMaxAggregateOutputType | null
  }

  type GetAlunoTurmaGroupByPayload<T extends AlunoTurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoTurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoTurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoTurmaGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoTurmaGroupByOutputType[P]>
        }
      >
    >


  export type AlunoTurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    turmaId?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunoTurma"]>



  export type AlunoTurmaSelectScalar = {
    alunoId?: boolean
    turmaId?: boolean
  }

  export type AlunoTurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "turmaId", ExtArgs["result"]["alunoTurma"]>
  export type AlunoTurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }

  export type $AlunoTurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlunoTurma"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      turmaId: number
    }, ExtArgs["result"]["alunoTurma"]>
    composites: {}
  }

  type AlunoTurmaGetPayload<S extends boolean | null | undefined | AlunoTurmaDefaultArgs> = $Result.GetResult<Prisma.$AlunoTurmaPayload, S>

  type AlunoTurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoTurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoTurmaCountAggregateInputType | true
    }

  export interface AlunoTurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlunoTurma'], meta: { name: 'AlunoTurma' } }
    /**
     * Find zero or one AlunoTurma that matches the filter.
     * @param {AlunoTurmaFindUniqueArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoTurmaFindUniqueArgs>(args: SelectSubset<T, AlunoTurmaFindUniqueArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlunoTurma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoTurmaFindUniqueOrThrowArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoTurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoTurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunoTurma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindFirstArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoTurmaFindFirstArgs>(args?: SelectSubset<T, AlunoTurmaFindFirstArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunoTurma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindFirstOrThrowArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoTurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoTurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlunoTurmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlunoTurmas
     * const alunoTurmas = await prisma.alunoTurma.findMany()
     * 
     * // Get first 10 AlunoTurmas
     * const alunoTurmas = await prisma.alunoTurma.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const alunoTurmaWithAlunoIdOnly = await prisma.alunoTurma.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends AlunoTurmaFindManyArgs>(args?: SelectSubset<T, AlunoTurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlunoTurma.
     * @param {AlunoTurmaCreateArgs} args - Arguments to create a AlunoTurma.
     * @example
     * // Create one AlunoTurma
     * const AlunoTurma = await prisma.alunoTurma.create({
     *   data: {
     *     // ... data to create a AlunoTurma
     *   }
     * })
     * 
     */
    create<T extends AlunoTurmaCreateArgs>(args: SelectSubset<T, AlunoTurmaCreateArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlunoTurmas.
     * @param {AlunoTurmaCreateManyArgs} args - Arguments to create many AlunoTurmas.
     * @example
     * // Create many AlunoTurmas
     * const alunoTurma = await prisma.alunoTurma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoTurmaCreateManyArgs>(args?: SelectSubset<T, AlunoTurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlunoTurma.
     * @param {AlunoTurmaDeleteArgs} args - Arguments to delete one AlunoTurma.
     * @example
     * // Delete one AlunoTurma
     * const AlunoTurma = await prisma.alunoTurma.delete({
     *   where: {
     *     // ... filter to delete one AlunoTurma
     *   }
     * })
     * 
     */
    delete<T extends AlunoTurmaDeleteArgs>(args: SelectSubset<T, AlunoTurmaDeleteArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlunoTurma.
     * @param {AlunoTurmaUpdateArgs} args - Arguments to update one AlunoTurma.
     * @example
     * // Update one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoTurmaUpdateArgs>(args: SelectSubset<T, AlunoTurmaUpdateArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlunoTurmas.
     * @param {AlunoTurmaDeleteManyArgs} args - Arguments to filter AlunoTurmas to delete.
     * @example
     * // Delete a few AlunoTurmas
     * const { count } = await prisma.alunoTurma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoTurmaDeleteManyArgs>(args?: SelectSubset<T, AlunoTurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunoTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlunoTurmas
     * const alunoTurma = await prisma.alunoTurma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoTurmaUpdateManyArgs>(args: SelectSubset<T, AlunoTurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlunoTurma.
     * @param {AlunoTurmaUpsertArgs} args - Arguments to update or create a AlunoTurma.
     * @example
     * // Update or create a AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.upsert({
     *   create: {
     *     // ... data to create a AlunoTurma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlunoTurma we want to update
     *   }
     * })
     */
    upsert<T extends AlunoTurmaUpsertArgs>(args: SelectSubset<T, AlunoTurmaUpsertArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlunoTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaCountArgs} args - Arguments to filter AlunoTurmas to count.
     * @example
     * // Count the number of AlunoTurmas
     * const count = await prisma.alunoTurma.count({
     *   where: {
     *     // ... the filter for the AlunoTurmas we want to count
     *   }
     * })
    **/
    count<T extends AlunoTurmaCountArgs>(
      args?: Subset<T, AlunoTurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoTurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlunoTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoTurmaAggregateArgs>(args: Subset<T, AlunoTurmaAggregateArgs>): Prisma.PrismaPromise<GetAlunoTurmaAggregateType<T>>

    /**
     * Group by AlunoTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaGroupByArgs} args - Group by arguments.
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
      T extends AlunoTurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoTurmaGroupByArgs['orderBy'] }
        : { orderBy?: AlunoTurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoTurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlunoTurma model
   */
  readonly fields: AlunoTurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlunoTurma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoTurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlunoTurma model
   */
  interface AlunoTurmaFieldRefs {
    readonly alunoId: FieldRef<"AlunoTurma", 'Int'>
    readonly turmaId: FieldRef<"AlunoTurma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlunoTurma findUnique
   */
  export type AlunoTurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma findUniqueOrThrow
   */
  export type AlunoTurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma findFirst
   */
  export type AlunoTurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunoTurmas.
     */
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma findFirstOrThrow
   */
  export type AlunoTurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunoTurmas.
     */
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma findMany
   */
  export type AlunoTurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurmas to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma create
   */
  export type AlunoTurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a AlunoTurma.
     */
    data: XOR<AlunoTurmaCreateInput, AlunoTurmaUncheckedCreateInput>
  }

  /**
   * AlunoTurma createMany
   */
  export type AlunoTurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlunoTurmas.
     */
    data: AlunoTurmaCreateManyInput | AlunoTurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlunoTurma update
   */
  export type AlunoTurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a AlunoTurma.
     */
    data: XOR<AlunoTurmaUpdateInput, AlunoTurmaUncheckedUpdateInput>
    /**
     * Choose, which AlunoTurma to update.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma updateMany
   */
  export type AlunoTurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlunoTurmas.
     */
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyInput>
    /**
     * Filter which AlunoTurmas to update
     */
    where?: AlunoTurmaWhereInput
    /**
     * Limit how many AlunoTurmas to update.
     */
    limit?: number
  }

  /**
   * AlunoTurma upsert
   */
  export type AlunoTurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the AlunoTurma to update in case it exists.
     */
    where: AlunoTurmaWhereUniqueInput
    /**
     * In case the AlunoTurma found by the `where` argument doesn't exist, create a new AlunoTurma with this data.
     */
    create: XOR<AlunoTurmaCreateInput, AlunoTurmaUncheckedCreateInput>
    /**
     * In case the AlunoTurma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoTurmaUpdateInput, AlunoTurmaUncheckedUpdateInput>
  }

  /**
   * AlunoTurma delete
   */
  export type AlunoTurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter which AlunoTurma to delete.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma deleteMany
   */
  export type AlunoTurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunoTurmas to delete
     */
    where?: AlunoTurmaWhereInput
    /**
     * Limit how many AlunoTurmas to delete.
     */
    limit?: number
  }

  /**
   * AlunoTurma without action
   */
  export type AlunoTurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
  }


  /**
   * Model Modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloMinAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    cursoId: number
    titulo: number
    ordem: number
    _all: number
  }


  export type ModuloAvgAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloSumAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloMinAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulo to aggregate.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type ModuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithAggregationInput | ModuloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: ModuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _avg?: ModuloAvgAggregateInputType
    _sum?: ModuloSumAggregateInputType
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: number
    cursoId: number
    titulo: string
    ordem: number
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type ModuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    videos?: boolean | Modulo$videosArgs<ExtArgs>
    apostilas?: boolean | Modulo$apostilasArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>



  export type ModuloSelectScalar = {
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
  }

  export type ModuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cursoId" | "titulo" | "ordem", ExtArgs["result"]["modulo"]>
  export type ModuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    videos?: boolean | Modulo$videosArgs<ExtArgs>
    apostilas?: boolean | Modulo$apostilasArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modulo"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
      apostilas: Prisma.$ApostilaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cursoId: number
      titulo: string
      ordem: number
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = $Result.GetResult<Prisma.$ModuloPayload, S>

  type ModuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface ModuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modulo'], meta: { name: 'Modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {ModuloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuloFindUniqueArgs>(args: SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuloFindFirstArgs>(args?: SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuloFindManyArgs>(args?: SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulo.
     * @param {ModuloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends ModuloCreateArgs>(args: SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {ModuloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuloCreateManyArgs>(args?: SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulo.
     * @param {ModuloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends ModuloDeleteArgs>(args: SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulo.
     * @param {ModuloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuloUpdateArgs>(args: SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {ModuloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuloDeleteManyArgs>(args?: SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuloUpdateManyArgs>(args: SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulo.
     * @param {ModuloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends ModuloUpsertArgs>(args: SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends ModuloCountArgs>(
      args?: Subset<T, ModuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloGroupByArgs} args - Group by arguments.
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
      T extends ModuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuloGroupByArgs['orderBy'] }
        : { orderBy?: ModuloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modulo model
   */
  readonly fields: ModuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends Modulo$videosArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apostilas<T extends Modulo$apostilasArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$apostilasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Modulo$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Modulo model
   */
  interface ModuloFieldRefs {
    readonly id: FieldRef<"Modulo", 'Int'>
    readonly cursoId: FieldRef<"Modulo", 'Int'>
    readonly titulo: FieldRef<"Modulo", 'String'>
    readonly ordem: FieldRef<"Modulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Modulo findUnique
   */
  export type ModuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findUniqueOrThrow
   */
  export type ModuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findFirst
   */
  export type ModuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findFirstOrThrow
   */
  export type ModuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findMany
   */
  export type ModuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulos to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo create
   */
  export type ModuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to create a Modulo.
     */
    data: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
  }

  /**
   * Modulo createMany
   */
  export type ModuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modulo update
   */
  export type ModuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to update a Modulo.
     */
    data: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
    /**
     * Choose, which Modulo to update.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo updateMany
   */
  export type ModuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
  }

  /**
   * Modulo upsert
   */
  export type ModuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The filter to search for the Modulo to update in case it exists.
     */
    where: ModuloWhereUniqueInput
    /**
     * In case the Modulo found by the `where` argument doesn't exist, create a new Modulo with this data.
     */
    create: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
    /**
     * In case the Modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
  }

  /**
   * Modulo delete
   */
  export type ModuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter which Modulo to delete.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo deleteMany
   */
  export type ModuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulos to delete
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to delete.
     */
    limit?: number
  }

  /**
   * Modulo.videos
   */
  export type Modulo$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Modulo.apostilas
   */
  export type Modulo$apostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    where?: ApostilaWhereInput
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    cursor?: ApostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Modulo.avaliacoes
   */
  export type Modulo$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Modulo without action
   */
  export type ModuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    url: string | null
    duracao: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    url: string | null
    duracao: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    url: number
    duracao: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    url?: true
    duracao?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    url?: true
    duracao?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    url?: true
    duracao?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    url: string
    duracao: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    url?: boolean
    duracao?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Video$progressoArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    url?: boolean
    duracao?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "url" | "duracao", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Video$progressoArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      url: string
      duracao: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Video$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Video$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly moduloId: FieldRef<"Video", 'Int'>
    readonly titulo: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly duracao: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.progresso
   */
  export type Video$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    where?: ProgressoVideoWhereInput
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    cursor?: ProgressoVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoVideoScalarFieldEnum | ProgressoVideoScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Apostila
   */

  export type AggregateApostila = {
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  export type ApostilaAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivo: string | null
  }

  export type ApostilaMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivo: string | null
  }

  export type ApostilaCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    arquivo: number
    _all: number
  }


  export type ApostilaAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivo?: true
  }

  export type ApostilaMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivo?: true
  }

  export type ApostilaCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivo?: true
    _all?: true
  }

  export type ApostilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apostila to aggregate.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apostilas
    **/
    _count?: true | ApostilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApostilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApostilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApostilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApostilaMaxAggregateInputType
  }

  export type GetApostilaAggregateType<T extends ApostilaAggregateArgs> = {
        [P in keyof T & keyof AggregateApostila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApostila[P]>
      : GetScalarType<T[P], AggregateApostila[P]>
  }




  export type ApostilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApostilaWhereInput
    orderBy?: ApostilaOrderByWithAggregationInput | ApostilaOrderByWithAggregationInput[]
    by: ApostilaScalarFieldEnum[] | ApostilaScalarFieldEnum
    having?: ApostilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApostilaCountAggregateInputType | true
    _avg?: ApostilaAvgAggregateInputType
    _sum?: ApostilaSumAggregateInputType
    _min?: ApostilaMinAggregateInputType
    _max?: ApostilaMaxAggregateInputType
  }

  export type ApostilaGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    arquivo: string
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  type GetApostilaGroupByPayload<T extends ApostilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApostilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApostilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
            : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
        }
      >
    >


  export type ApostilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivo?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Apostila$progressoArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apostila"]>



  export type ApostilaSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivo?: boolean
  }

  export type ApostilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "arquivo", ExtArgs["result"]["apostila"]>
  export type ApostilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Apostila$progressoArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApostilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apostila"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoApostilaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      arquivo: string
    }, ExtArgs["result"]["apostila"]>
    composites: {}
  }

  type ApostilaGetPayload<S extends boolean | null | undefined | ApostilaDefaultArgs> = $Result.GetResult<Prisma.$ApostilaPayload, S>

  type ApostilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApostilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApostilaCountAggregateInputType | true
    }

  export interface ApostilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apostila'], meta: { name: 'Apostila' } }
    /**
     * Find zero or one Apostila that matches the filter.
     * @param {ApostilaFindUniqueArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApostilaFindUniqueArgs>(args: SelectSubset<T, ApostilaFindUniqueArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apostila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApostilaFindUniqueOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApostilaFindUniqueOrThrowArgs>(args: SelectSubset<T, ApostilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindFirstArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApostilaFindFirstArgs>(args?: SelectSubset<T, ApostilaFindFirstArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindFirstOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApostilaFindFirstOrThrowArgs>(args?: SelectSubset<T, ApostilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apostilas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apostilas
     * const apostilas = await prisma.apostila.findMany()
     * 
     * // Get first 10 Apostilas
     * const apostilas = await prisma.apostila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apostilaWithIdOnly = await prisma.apostila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApostilaFindManyArgs>(args?: SelectSubset<T, ApostilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apostila.
     * @param {ApostilaCreateArgs} args - Arguments to create a Apostila.
     * @example
     * // Create one Apostila
     * const Apostila = await prisma.apostila.create({
     *   data: {
     *     // ... data to create a Apostila
     *   }
     * })
     * 
     */
    create<T extends ApostilaCreateArgs>(args: SelectSubset<T, ApostilaCreateArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apostilas.
     * @param {ApostilaCreateManyArgs} args - Arguments to create many Apostilas.
     * @example
     * // Create many Apostilas
     * const apostila = await prisma.apostila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApostilaCreateManyArgs>(args?: SelectSubset<T, ApostilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apostila.
     * @param {ApostilaDeleteArgs} args - Arguments to delete one Apostila.
     * @example
     * // Delete one Apostila
     * const Apostila = await prisma.apostila.delete({
     *   where: {
     *     // ... filter to delete one Apostila
     *   }
     * })
     * 
     */
    delete<T extends ApostilaDeleteArgs>(args: SelectSubset<T, ApostilaDeleteArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apostila.
     * @param {ApostilaUpdateArgs} args - Arguments to update one Apostila.
     * @example
     * // Update one Apostila
     * const apostila = await prisma.apostila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApostilaUpdateArgs>(args: SelectSubset<T, ApostilaUpdateArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apostilas.
     * @param {ApostilaDeleteManyArgs} args - Arguments to filter Apostilas to delete.
     * @example
     * // Delete a few Apostilas
     * const { count } = await prisma.apostila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApostilaDeleteManyArgs>(args?: SelectSubset<T, ApostilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apostilas
     * const apostila = await prisma.apostila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApostilaUpdateManyArgs>(args: SelectSubset<T, ApostilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apostila.
     * @param {ApostilaUpsertArgs} args - Arguments to update or create a Apostila.
     * @example
     * // Update or create a Apostila
     * const apostila = await prisma.apostila.upsert({
     *   create: {
     *     // ... data to create a Apostila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apostila we want to update
     *   }
     * })
     */
    upsert<T extends ApostilaUpsertArgs>(args: SelectSubset<T, ApostilaUpsertArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaCountArgs} args - Arguments to filter Apostilas to count.
     * @example
     * // Count the number of Apostilas
     * const count = await prisma.apostila.count({
     *   where: {
     *     // ... the filter for the Apostilas we want to count
     *   }
     * })
    **/
    count<T extends ApostilaCountArgs>(
      args?: Subset<T, ApostilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApostilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApostilaAggregateArgs>(args: Subset<T, ApostilaAggregateArgs>): Prisma.PrismaPromise<GetApostilaAggregateType<T>>

    /**
     * Group by Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaGroupByArgs} args - Group by arguments.
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
      T extends ApostilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApostilaGroupByArgs['orderBy'] }
        : { orderBy?: ApostilaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApostilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApostilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apostila model
   */
  readonly fields: ApostilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apostila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApostilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Apostila$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Apostila$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Apostila model
   */
  interface ApostilaFieldRefs {
    readonly id: FieldRef<"Apostila", 'Int'>
    readonly moduloId: FieldRef<"Apostila", 'Int'>
    readonly titulo: FieldRef<"Apostila", 'String'>
    readonly arquivo: FieldRef<"Apostila", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Apostila findUnique
   */
  export type ApostilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila findUniqueOrThrow
   */
  export type ApostilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila findFirst
   */
  export type ApostilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila findFirstOrThrow
   */
  export type ApostilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila findMany
   */
  export type ApostilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostilas to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila create
   */
  export type ApostilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The data needed to create a Apostila.
     */
    data: XOR<ApostilaCreateInput, ApostilaUncheckedCreateInput>
  }

  /**
   * Apostila createMany
   */
  export type ApostilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apostilas.
     */
    data: ApostilaCreateManyInput | ApostilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apostila update
   */
  export type ApostilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The data needed to update a Apostila.
     */
    data: XOR<ApostilaUpdateInput, ApostilaUncheckedUpdateInput>
    /**
     * Choose, which Apostila to update.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila updateMany
   */
  export type ApostilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apostilas.
     */
    data: XOR<ApostilaUpdateManyMutationInput, ApostilaUncheckedUpdateManyInput>
    /**
     * Filter which Apostilas to update
     */
    where?: ApostilaWhereInput
    /**
     * Limit how many Apostilas to update.
     */
    limit?: number
  }

  /**
   * Apostila upsert
   */
  export type ApostilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The filter to search for the Apostila to update in case it exists.
     */
    where: ApostilaWhereUniqueInput
    /**
     * In case the Apostila found by the `where` argument doesn't exist, create a new Apostila with this data.
     */
    create: XOR<ApostilaCreateInput, ApostilaUncheckedCreateInput>
    /**
     * In case the Apostila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApostilaUpdateInput, ApostilaUncheckedUpdateInput>
  }

  /**
   * Apostila delete
   */
  export type ApostilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter which Apostila to delete.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila deleteMany
   */
  export type ApostilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apostilas to delete
     */
    where?: ApostilaWhereInput
    /**
     * Limit how many Apostilas to delete.
     */
    limit?: number
  }

  /**
   * Apostila.progresso
   */
  export type Apostila$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    where?: ProgressoApostilaWhereInput
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    cursor?: ProgressoApostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoApostilaScalarFieldEnum | ProgressoApostilaScalarFieldEnum[]
  }

  /**
   * Apostila without action
   */
  export type ApostilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    descricao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    descricao: string
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Avaliacao$progressoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type AvaliacaoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "descricao", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Avaliacao$progressoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoAvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      descricao: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Avaliacao$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly moduloId: FieldRef<"Avaliacao", 'Int'>
    readonly titulo: FieldRef<"Avaliacao", 'String'>
    readonly descricao: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.progresso
   */
  export type Avaliacao$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    where?: ProgressoAvaliacaoWhereInput
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAvaliacaoScalarFieldEnum | ProgressoAvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model ProgressoVideo
   */

  export type AggregateProgressoVideo = {
    _count: ProgressoVideoCountAggregateOutputType | null
    _avg: ProgressoVideoAvgAggregateOutputType | null
    _sum: ProgressoVideoSumAggregateOutputType | null
    _min: ProgressoVideoMinAggregateOutputType | null
    _max: ProgressoVideoMaxAggregateOutputType | null
  }

  export type ProgressoVideoAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    videoId: number | null
    progresso: number | null
  }

  export type ProgressoVideoSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    videoId: number | null
    progresso: number | null
  }

  export type ProgressoVideoMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    videoId: number | null
    progresso: number | null
    concluido: boolean | null
  }

  export type ProgressoVideoMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    videoId: number | null
    progresso: number | null
    concluido: boolean | null
  }

  export type ProgressoVideoCountAggregateOutputType = {
    id: number
    alunoId: number
    videoId: number
    progresso: number
    concluido: number
    _all: number
  }


  export type ProgressoVideoAvgAggregateInputType = {
    id?: true
    alunoId?: true
    videoId?: true
    progresso?: true
  }

  export type ProgressoVideoSumAggregateInputType = {
    id?: true
    alunoId?: true
    videoId?: true
    progresso?: true
  }

  export type ProgressoVideoMinAggregateInputType = {
    id?: true
    alunoId?: true
    videoId?: true
    progresso?: true
    concluido?: true
  }

  export type ProgressoVideoMaxAggregateInputType = {
    id?: true
    alunoId?: true
    videoId?: true
    progresso?: true
    concluido?: true
  }

  export type ProgressoVideoCountAggregateInputType = {
    id?: true
    alunoId?: true
    videoId?: true
    progresso?: true
    concluido?: true
    _all?: true
  }

  export type ProgressoVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoVideo to aggregate.
     */
    where?: ProgressoVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoVideos to fetch.
     */
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressoVideos
    **/
    _count?: true | ProgressoVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoVideoMaxAggregateInputType
  }

  export type GetProgressoVideoAggregateType<T extends ProgressoVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoVideo[P]>
      : GetScalarType<T[P], AggregateProgressoVideo[P]>
  }




  export type ProgressoVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoVideoWhereInput
    orderBy?: ProgressoVideoOrderByWithAggregationInput | ProgressoVideoOrderByWithAggregationInput[]
    by: ProgressoVideoScalarFieldEnum[] | ProgressoVideoScalarFieldEnum
    having?: ProgressoVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoVideoCountAggregateInputType | true
    _avg?: ProgressoVideoAvgAggregateInputType
    _sum?: ProgressoVideoSumAggregateInputType
    _min?: ProgressoVideoMinAggregateInputType
    _max?: ProgressoVideoMaxAggregateInputType
  }

  export type ProgressoVideoGroupByOutputType = {
    id: number
    alunoId: number
    videoId: number
    progresso: number
    concluido: boolean
    _count: ProgressoVideoCountAggregateOutputType | null
    _avg: ProgressoVideoAvgAggregateOutputType | null
    _sum: ProgressoVideoSumAggregateOutputType | null
    _min: ProgressoVideoMinAggregateOutputType | null
    _max: ProgressoVideoMaxAggregateOutputType | null
  }

  type GetProgressoVideoGroupByPayload<T extends ProgressoVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoVideoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoVideoGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    videoId?: boolean
    progresso?: boolean
    concluido?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoVideo"]>



  export type ProgressoVideoSelectScalar = {
    id?: boolean
    alunoId?: boolean
    videoId?: boolean
    progresso?: boolean
    concluido?: boolean
  }

  export type ProgressoVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "videoId" | "progresso" | "concluido", ExtArgs["result"]["progressoVideo"]>
  export type ProgressoVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $ProgressoVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressoVideo"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      videoId: number
      progresso: number
      concluido: boolean
    }, ExtArgs["result"]["progressoVideo"]>
    composites: {}
  }

  type ProgressoVideoGetPayload<S extends boolean | null | undefined | ProgressoVideoDefaultArgs> = $Result.GetResult<Prisma.$ProgressoVideoPayload, S>

  type ProgressoVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressoVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoVideoCountAggregateInputType | true
    }

  export interface ProgressoVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressoVideo'], meta: { name: 'ProgressoVideo' } }
    /**
     * Find zero or one ProgressoVideo that matches the filter.
     * @param {ProgressoVideoFindUniqueArgs} args - Arguments to find a ProgressoVideo
     * @example
     * // Get one ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoVideoFindUniqueArgs>(args: SelectSubset<T, ProgressoVideoFindUniqueArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressoVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressoVideoFindUniqueOrThrowArgs} args - Arguments to find a ProgressoVideo
     * @example
     * // Get one ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoFindFirstArgs} args - Arguments to find a ProgressoVideo
     * @example
     * // Get one ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoVideoFindFirstArgs>(args?: SelectSubset<T, ProgressoVideoFindFirstArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoFindFirstOrThrowArgs} args - Arguments to find a ProgressoVideo
     * @example
     * // Get one ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressoVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressoVideos
     * const progressoVideos = await prisma.progressoVideo.findMany()
     * 
     * // Get first 10 ProgressoVideos
     * const progressoVideos = await prisma.progressoVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressoVideoWithIdOnly = await prisma.progressoVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressoVideoFindManyArgs>(args?: SelectSubset<T, ProgressoVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressoVideo.
     * @param {ProgressoVideoCreateArgs} args - Arguments to create a ProgressoVideo.
     * @example
     * // Create one ProgressoVideo
     * const ProgressoVideo = await prisma.progressoVideo.create({
     *   data: {
     *     // ... data to create a ProgressoVideo
     *   }
     * })
     * 
     */
    create<T extends ProgressoVideoCreateArgs>(args: SelectSubset<T, ProgressoVideoCreateArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressoVideos.
     * @param {ProgressoVideoCreateManyArgs} args - Arguments to create many ProgressoVideos.
     * @example
     * // Create many ProgressoVideos
     * const progressoVideo = await prisma.progressoVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoVideoCreateManyArgs>(args?: SelectSubset<T, ProgressoVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgressoVideo.
     * @param {ProgressoVideoDeleteArgs} args - Arguments to delete one ProgressoVideo.
     * @example
     * // Delete one ProgressoVideo
     * const ProgressoVideo = await prisma.progressoVideo.delete({
     *   where: {
     *     // ... filter to delete one ProgressoVideo
     *   }
     * })
     * 
     */
    delete<T extends ProgressoVideoDeleteArgs>(args: SelectSubset<T, ProgressoVideoDeleteArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressoVideo.
     * @param {ProgressoVideoUpdateArgs} args - Arguments to update one ProgressoVideo.
     * @example
     * // Update one ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoVideoUpdateArgs>(args: SelectSubset<T, ProgressoVideoUpdateArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressoVideos.
     * @param {ProgressoVideoDeleteManyArgs} args - Arguments to filter ProgressoVideos to delete.
     * @example
     * // Delete a few ProgressoVideos
     * const { count } = await prisma.progressoVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoVideoDeleteManyArgs>(args?: SelectSubset<T, ProgressoVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressoVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressoVideos
     * const progressoVideo = await prisma.progressoVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoVideoUpdateManyArgs>(args: SelectSubset<T, ProgressoVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressoVideo.
     * @param {ProgressoVideoUpsertArgs} args - Arguments to update or create a ProgressoVideo.
     * @example
     * // Update or create a ProgressoVideo
     * const progressoVideo = await prisma.progressoVideo.upsert({
     *   create: {
     *     // ... data to create a ProgressoVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressoVideo we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoVideoUpsertArgs>(args: SelectSubset<T, ProgressoVideoUpsertArgs<ExtArgs>>): Prisma__ProgressoVideoClient<$Result.GetResult<Prisma.$ProgressoVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressoVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoCountArgs} args - Arguments to filter ProgressoVideos to count.
     * @example
     * // Count the number of ProgressoVideos
     * const count = await prisma.progressoVideo.count({
     *   where: {
     *     // ... the filter for the ProgressoVideos we want to count
     *   }
     * })
    **/
    count<T extends ProgressoVideoCountArgs>(
      args?: Subset<T, ProgressoVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressoVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressoVideoAggregateArgs>(args: Subset<T, ProgressoVideoAggregateArgs>): Prisma.PrismaPromise<GetProgressoVideoAggregateType<T>>

    /**
     * Group by ProgressoVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoVideoGroupByArgs} args - Group by arguments.
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
      T extends ProgressoVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoVideoGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressoVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressoVideo model
   */
  readonly fields: ProgressoVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressoVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressoVideo model
   */
  interface ProgressoVideoFieldRefs {
    readonly id: FieldRef<"ProgressoVideo", 'Int'>
    readonly alunoId: FieldRef<"ProgressoVideo", 'Int'>
    readonly videoId: FieldRef<"ProgressoVideo", 'Int'>
    readonly progresso: FieldRef<"ProgressoVideo", 'Int'>
    readonly concluido: FieldRef<"ProgressoVideo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProgressoVideo findUnique
   */
  export type ProgressoVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoVideo to fetch.
     */
    where: ProgressoVideoWhereUniqueInput
  }

  /**
   * ProgressoVideo findUniqueOrThrow
   */
  export type ProgressoVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoVideo to fetch.
     */
    where: ProgressoVideoWhereUniqueInput
  }

  /**
   * ProgressoVideo findFirst
   */
  export type ProgressoVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoVideo to fetch.
     */
    where?: ProgressoVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoVideos to fetch.
     */
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoVideos.
     */
    cursor?: ProgressoVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoVideos.
     */
    distinct?: ProgressoVideoScalarFieldEnum | ProgressoVideoScalarFieldEnum[]
  }

  /**
   * ProgressoVideo findFirstOrThrow
   */
  export type ProgressoVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoVideo to fetch.
     */
    where?: ProgressoVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoVideos to fetch.
     */
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoVideos.
     */
    cursor?: ProgressoVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoVideos.
     */
    distinct?: ProgressoVideoScalarFieldEnum | ProgressoVideoScalarFieldEnum[]
  }

  /**
   * ProgressoVideo findMany
   */
  export type ProgressoVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoVideos to fetch.
     */
    where?: ProgressoVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoVideos to fetch.
     */
    orderBy?: ProgressoVideoOrderByWithRelationInput | ProgressoVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressoVideos.
     */
    cursor?: ProgressoVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoVideos.
     */
    skip?: number
    distinct?: ProgressoVideoScalarFieldEnum | ProgressoVideoScalarFieldEnum[]
  }

  /**
   * ProgressoVideo create
   */
  export type ProgressoVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressoVideo.
     */
    data: XOR<ProgressoVideoCreateInput, ProgressoVideoUncheckedCreateInput>
  }

  /**
   * ProgressoVideo createMany
   */
  export type ProgressoVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressoVideos.
     */
    data: ProgressoVideoCreateManyInput | ProgressoVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressoVideo update
   */
  export type ProgressoVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressoVideo.
     */
    data: XOR<ProgressoVideoUpdateInput, ProgressoVideoUncheckedUpdateInput>
    /**
     * Choose, which ProgressoVideo to update.
     */
    where: ProgressoVideoWhereUniqueInput
  }

  /**
   * ProgressoVideo updateMany
   */
  export type ProgressoVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressoVideos.
     */
    data: XOR<ProgressoVideoUpdateManyMutationInput, ProgressoVideoUncheckedUpdateManyInput>
    /**
     * Filter which ProgressoVideos to update
     */
    where?: ProgressoVideoWhereInput
    /**
     * Limit how many ProgressoVideos to update.
     */
    limit?: number
  }

  /**
   * ProgressoVideo upsert
   */
  export type ProgressoVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressoVideo to update in case it exists.
     */
    where: ProgressoVideoWhereUniqueInput
    /**
     * In case the ProgressoVideo found by the `where` argument doesn't exist, create a new ProgressoVideo with this data.
     */
    create: XOR<ProgressoVideoCreateInput, ProgressoVideoUncheckedCreateInput>
    /**
     * In case the ProgressoVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoVideoUpdateInput, ProgressoVideoUncheckedUpdateInput>
  }

  /**
   * ProgressoVideo delete
   */
  export type ProgressoVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
    /**
     * Filter which ProgressoVideo to delete.
     */
    where: ProgressoVideoWhereUniqueInput
  }

  /**
   * ProgressoVideo deleteMany
   */
  export type ProgressoVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoVideos to delete
     */
    where?: ProgressoVideoWhereInput
    /**
     * Limit how many ProgressoVideos to delete.
     */
    limit?: number
  }

  /**
   * ProgressoVideo without action
   */
  export type ProgressoVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoVideo
     */
    select?: ProgressoVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoVideo
     */
    omit?: ProgressoVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoVideoInclude<ExtArgs> | null
  }


  /**
   * Model ProgressoApostila
   */

  export type AggregateProgressoApostila = {
    _count: ProgressoApostilaCountAggregateOutputType | null
    _avg: ProgressoApostilaAvgAggregateOutputType | null
    _sum: ProgressoApostilaSumAggregateOutputType | null
    _min: ProgressoApostilaMinAggregateOutputType | null
    _max: ProgressoApostilaMaxAggregateOutputType | null
  }

  export type ProgressoApostilaAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    apostilaId: number | null
    progresso: number | null
  }

  export type ProgressoApostilaSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    apostilaId: number | null
    progresso: number | null
  }

  export type ProgressoApostilaMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    apostilaId: number | null
    progresso: number | null
    concluido: boolean | null
  }

  export type ProgressoApostilaMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    apostilaId: number | null
    progresso: number | null
    concluido: boolean | null
  }

  export type ProgressoApostilaCountAggregateOutputType = {
    id: number
    alunoId: number
    apostilaId: number
    progresso: number
    concluido: number
    _all: number
  }


  export type ProgressoApostilaAvgAggregateInputType = {
    id?: true
    alunoId?: true
    apostilaId?: true
    progresso?: true
  }

  export type ProgressoApostilaSumAggregateInputType = {
    id?: true
    alunoId?: true
    apostilaId?: true
    progresso?: true
  }

  export type ProgressoApostilaMinAggregateInputType = {
    id?: true
    alunoId?: true
    apostilaId?: true
    progresso?: true
    concluido?: true
  }

  export type ProgressoApostilaMaxAggregateInputType = {
    id?: true
    alunoId?: true
    apostilaId?: true
    progresso?: true
    concluido?: true
  }

  export type ProgressoApostilaCountAggregateInputType = {
    id?: true
    alunoId?: true
    apostilaId?: true
    progresso?: true
    concluido?: true
    _all?: true
  }

  export type ProgressoApostilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoApostila to aggregate.
     */
    where?: ProgressoApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoApostilas to fetch.
     */
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoApostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoApostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressoApostilas
    **/
    _count?: true | ProgressoApostilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoApostilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoApostilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoApostilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoApostilaMaxAggregateInputType
  }

  export type GetProgressoApostilaAggregateType<T extends ProgressoApostilaAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoApostila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoApostila[P]>
      : GetScalarType<T[P], AggregateProgressoApostila[P]>
  }




  export type ProgressoApostilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoApostilaWhereInput
    orderBy?: ProgressoApostilaOrderByWithAggregationInput | ProgressoApostilaOrderByWithAggregationInput[]
    by: ProgressoApostilaScalarFieldEnum[] | ProgressoApostilaScalarFieldEnum
    having?: ProgressoApostilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoApostilaCountAggregateInputType | true
    _avg?: ProgressoApostilaAvgAggregateInputType
    _sum?: ProgressoApostilaSumAggregateInputType
    _min?: ProgressoApostilaMinAggregateInputType
    _max?: ProgressoApostilaMaxAggregateInputType
  }

  export type ProgressoApostilaGroupByOutputType = {
    id: number
    alunoId: number
    apostilaId: number
    progresso: number
    concluido: boolean
    _count: ProgressoApostilaCountAggregateOutputType | null
    _avg: ProgressoApostilaAvgAggregateOutputType | null
    _sum: ProgressoApostilaSumAggregateOutputType | null
    _min: ProgressoApostilaMinAggregateOutputType | null
    _max: ProgressoApostilaMaxAggregateOutputType | null
  }

  type GetProgressoApostilaGroupByPayload<T extends ProgressoApostilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoApostilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoApostilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoApostilaGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoApostilaGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoApostilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    apostilaId?: boolean
    progresso?: boolean
    concluido?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    apostila?: boolean | ApostilaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoApostila"]>



  export type ProgressoApostilaSelectScalar = {
    id?: boolean
    alunoId?: boolean
    apostilaId?: boolean
    progresso?: boolean
    concluido?: boolean
  }

  export type ProgressoApostilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "apostilaId" | "progresso" | "concluido", ExtArgs["result"]["progressoApostila"]>
  export type ProgressoApostilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    apostila?: boolean | ApostilaDefaultArgs<ExtArgs>
  }

  export type $ProgressoApostilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressoApostila"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      apostila: Prisma.$ApostilaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      apostilaId: number
      progresso: number
      concluido: boolean
    }, ExtArgs["result"]["progressoApostila"]>
    composites: {}
  }

  type ProgressoApostilaGetPayload<S extends boolean | null | undefined | ProgressoApostilaDefaultArgs> = $Result.GetResult<Prisma.$ProgressoApostilaPayload, S>

  type ProgressoApostilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressoApostilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoApostilaCountAggregateInputType | true
    }

  export interface ProgressoApostilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressoApostila'], meta: { name: 'ProgressoApostila' } }
    /**
     * Find zero or one ProgressoApostila that matches the filter.
     * @param {ProgressoApostilaFindUniqueArgs} args - Arguments to find a ProgressoApostila
     * @example
     * // Get one ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoApostilaFindUniqueArgs>(args: SelectSubset<T, ProgressoApostilaFindUniqueArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressoApostila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressoApostilaFindUniqueOrThrowArgs} args - Arguments to find a ProgressoApostila
     * @example
     * // Get one ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoApostilaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoApostilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoApostila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaFindFirstArgs} args - Arguments to find a ProgressoApostila
     * @example
     * // Get one ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoApostilaFindFirstArgs>(args?: SelectSubset<T, ProgressoApostilaFindFirstArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoApostila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaFindFirstOrThrowArgs} args - Arguments to find a ProgressoApostila
     * @example
     * // Get one ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoApostilaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoApostilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressoApostilas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressoApostilas
     * const progressoApostilas = await prisma.progressoApostila.findMany()
     * 
     * // Get first 10 ProgressoApostilas
     * const progressoApostilas = await prisma.progressoApostila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressoApostilaWithIdOnly = await prisma.progressoApostila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressoApostilaFindManyArgs>(args?: SelectSubset<T, ProgressoApostilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressoApostila.
     * @param {ProgressoApostilaCreateArgs} args - Arguments to create a ProgressoApostila.
     * @example
     * // Create one ProgressoApostila
     * const ProgressoApostila = await prisma.progressoApostila.create({
     *   data: {
     *     // ... data to create a ProgressoApostila
     *   }
     * })
     * 
     */
    create<T extends ProgressoApostilaCreateArgs>(args: SelectSubset<T, ProgressoApostilaCreateArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressoApostilas.
     * @param {ProgressoApostilaCreateManyArgs} args - Arguments to create many ProgressoApostilas.
     * @example
     * // Create many ProgressoApostilas
     * const progressoApostila = await prisma.progressoApostila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoApostilaCreateManyArgs>(args?: SelectSubset<T, ProgressoApostilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgressoApostila.
     * @param {ProgressoApostilaDeleteArgs} args - Arguments to delete one ProgressoApostila.
     * @example
     * // Delete one ProgressoApostila
     * const ProgressoApostila = await prisma.progressoApostila.delete({
     *   where: {
     *     // ... filter to delete one ProgressoApostila
     *   }
     * })
     * 
     */
    delete<T extends ProgressoApostilaDeleteArgs>(args: SelectSubset<T, ProgressoApostilaDeleteArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressoApostila.
     * @param {ProgressoApostilaUpdateArgs} args - Arguments to update one ProgressoApostila.
     * @example
     * // Update one ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoApostilaUpdateArgs>(args: SelectSubset<T, ProgressoApostilaUpdateArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressoApostilas.
     * @param {ProgressoApostilaDeleteManyArgs} args - Arguments to filter ProgressoApostilas to delete.
     * @example
     * // Delete a few ProgressoApostilas
     * const { count } = await prisma.progressoApostila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoApostilaDeleteManyArgs>(args?: SelectSubset<T, ProgressoApostilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressoApostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressoApostilas
     * const progressoApostila = await prisma.progressoApostila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoApostilaUpdateManyArgs>(args: SelectSubset<T, ProgressoApostilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressoApostila.
     * @param {ProgressoApostilaUpsertArgs} args - Arguments to update or create a ProgressoApostila.
     * @example
     * // Update or create a ProgressoApostila
     * const progressoApostila = await prisma.progressoApostila.upsert({
     *   create: {
     *     // ... data to create a ProgressoApostila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressoApostila we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoApostilaUpsertArgs>(args: SelectSubset<T, ProgressoApostilaUpsertArgs<ExtArgs>>): Prisma__ProgressoApostilaClient<$Result.GetResult<Prisma.$ProgressoApostilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressoApostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaCountArgs} args - Arguments to filter ProgressoApostilas to count.
     * @example
     * // Count the number of ProgressoApostilas
     * const count = await prisma.progressoApostila.count({
     *   where: {
     *     // ... the filter for the ProgressoApostilas we want to count
     *   }
     * })
    **/
    count<T extends ProgressoApostilaCountArgs>(
      args?: Subset<T, ProgressoApostilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoApostilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressoApostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressoApostilaAggregateArgs>(args: Subset<T, ProgressoApostilaAggregateArgs>): Prisma.PrismaPromise<GetProgressoApostilaAggregateType<T>>

    /**
     * Group by ProgressoApostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoApostilaGroupByArgs} args - Group by arguments.
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
      T extends ProgressoApostilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoApostilaGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoApostilaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressoApostilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoApostilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressoApostila model
   */
  readonly fields: ProgressoApostilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressoApostila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoApostilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apostila<T extends ApostilaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApostilaDefaultArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressoApostila model
   */
  interface ProgressoApostilaFieldRefs {
    readonly id: FieldRef<"ProgressoApostila", 'Int'>
    readonly alunoId: FieldRef<"ProgressoApostila", 'Int'>
    readonly apostilaId: FieldRef<"ProgressoApostila", 'Int'>
    readonly progresso: FieldRef<"ProgressoApostila", 'Int'>
    readonly concluido: FieldRef<"ProgressoApostila", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProgressoApostila findUnique
   */
  export type ProgressoApostilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoApostila to fetch.
     */
    where: ProgressoApostilaWhereUniqueInput
  }

  /**
   * ProgressoApostila findUniqueOrThrow
   */
  export type ProgressoApostilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoApostila to fetch.
     */
    where: ProgressoApostilaWhereUniqueInput
  }

  /**
   * ProgressoApostila findFirst
   */
  export type ProgressoApostilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoApostila to fetch.
     */
    where?: ProgressoApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoApostilas to fetch.
     */
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoApostilas.
     */
    cursor?: ProgressoApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoApostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoApostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoApostilas.
     */
    distinct?: ProgressoApostilaScalarFieldEnum | ProgressoApostilaScalarFieldEnum[]
  }

  /**
   * ProgressoApostila findFirstOrThrow
   */
  export type ProgressoApostilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoApostila to fetch.
     */
    where?: ProgressoApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoApostilas to fetch.
     */
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoApostilas.
     */
    cursor?: ProgressoApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoApostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoApostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoApostilas.
     */
    distinct?: ProgressoApostilaScalarFieldEnum | ProgressoApostilaScalarFieldEnum[]
  }

  /**
   * ProgressoApostila findMany
   */
  export type ProgressoApostilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoApostilas to fetch.
     */
    where?: ProgressoApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoApostilas to fetch.
     */
    orderBy?: ProgressoApostilaOrderByWithRelationInput | ProgressoApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressoApostilas.
     */
    cursor?: ProgressoApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoApostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoApostilas.
     */
    skip?: number
    distinct?: ProgressoApostilaScalarFieldEnum | ProgressoApostilaScalarFieldEnum[]
  }

  /**
   * ProgressoApostila create
   */
  export type ProgressoApostilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressoApostila.
     */
    data: XOR<ProgressoApostilaCreateInput, ProgressoApostilaUncheckedCreateInput>
  }

  /**
   * ProgressoApostila createMany
   */
  export type ProgressoApostilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressoApostilas.
     */
    data: ProgressoApostilaCreateManyInput | ProgressoApostilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressoApostila update
   */
  export type ProgressoApostilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressoApostila.
     */
    data: XOR<ProgressoApostilaUpdateInput, ProgressoApostilaUncheckedUpdateInput>
    /**
     * Choose, which ProgressoApostila to update.
     */
    where: ProgressoApostilaWhereUniqueInput
  }

  /**
   * ProgressoApostila updateMany
   */
  export type ProgressoApostilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressoApostilas.
     */
    data: XOR<ProgressoApostilaUpdateManyMutationInput, ProgressoApostilaUncheckedUpdateManyInput>
    /**
     * Filter which ProgressoApostilas to update
     */
    where?: ProgressoApostilaWhereInput
    /**
     * Limit how many ProgressoApostilas to update.
     */
    limit?: number
  }

  /**
   * ProgressoApostila upsert
   */
  export type ProgressoApostilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressoApostila to update in case it exists.
     */
    where: ProgressoApostilaWhereUniqueInput
    /**
     * In case the ProgressoApostila found by the `where` argument doesn't exist, create a new ProgressoApostila with this data.
     */
    create: XOR<ProgressoApostilaCreateInput, ProgressoApostilaUncheckedCreateInput>
    /**
     * In case the ProgressoApostila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoApostilaUpdateInput, ProgressoApostilaUncheckedUpdateInput>
  }

  /**
   * ProgressoApostila delete
   */
  export type ProgressoApostilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
    /**
     * Filter which ProgressoApostila to delete.
     */
    where: ProgressoApostilaWhereUniqueInput
  }

  /**
   * ProgressoApostila deleteMany
   */
  export type ProgressoApostilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoApostilas to delete
     */
    where?: ProgressoApostilaWhereInput
    /**
     * Limit how many ProgressoApostilas to delete.
     */
    limit?: number
  }

  /**
   * ProgressoApostila without action
   */
  export type ProgressoApostilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoApostila
     */
    select?: ProgressoApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoApostila
     */
    omit?: ProgressoApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoApostilaInclude<ExtArgs> | null
  }


  /**
   * Model ProgressoAvaliacao
   */

  export type AggregateProgressoAvaliacao = {
    _count: ProgressoAvaliacaoCountAggregateOutputType | null
    _avg: ProgressoAvaliacaoAvgAggregateOutputType | null
    _sum: ProgressoAvaliacaoSumAggregateOutputType | null
    _min: ProgressoAvaliacaoMinAggregateOutputType | null
    _max: ProgressoAvaliacaoMaxAggregateOutputType | null
  }

  export type ProgressoAvaliacaoAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    avaliacaoId: number | null
    nota: number | null
  }

  export type ProgressoAvaliacaoSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    avaliacaoId: number | null
    nota: number | null
  }

  export type ProgressoAvaliacaoMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    avaliacaoId: number | null
    nota: number | null
    concluido: boolean | null
  }

  export type ProgressoAvaliacaoMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    avaliacaoId: number | null
    nota: number | null
    concluido: boolean | null
  }

  export type ProgressoAvaliacaoCountAggregateOutputType = {
    id: number
    alunoId: number
    avaliacaoId: number
    nota: number
    concluido: number
    _all: number
  }


  export type ProgressoAvaliacaoAvgAggregateInputType = {
    id?: true
    alunoId?: true
    avaliacaoId?: true
    nota?: true
  }

  export type ProgressoAvaliacaoSumAggregateInputType = {
    id?: true
    alunoId?: true
    avaliacaoId?: true
    nota?: true
  }

  export type ProgressoAvaliacaoMinAggregateInputType = {
    id?: true
    alunoId?: true
    avaliacaoId?: true
    nota?: true
    concluido?: true
  }

  export type ProgressoAvaliacaoMaxAggregateInputType = {
    id?: true
    alunoId?: true
    avaliacaoId?: true
    nota?: true
    concluido?: true
  }

  export type ProgressoAvaliacaoCountAggregateInputType = {
    id?: true
    alunoId?: true
    avaliacaoId?: true
    nota?: true
    concluido?: true
    _all?: true
  }

  export type ProgressoAvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAvaliacao to aggregate.
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAvaliacaos to fetch.
     */
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressoAvaliacaos
    **/
    _count?: true | ProgressoAvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoAvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoAvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoAvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoAvaliacaoMaxAggregateInputType
  }

  export type GetProgressoAvaliacaoAggregateType<T extends ProgressoAvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoAvaliacao[P]>
      : GetScalarType<T[P], AggregateProgressoAvaliacao[P]>
  }




  export type ProgressoAvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAvaliacaoWhereInput
    orderBy?: ProgressoAvaliacaoOrderByWithAggregationInput | ProgressoAvaliacaoOrderByWithAggregationInput[]
    by: ProgressoAvaliacaoScalarFieldEnum[] | ProgressoAvaliacaoScalarFieldEnum
    having?: ProgressoAvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoAvaliacaoCountAggregateInputType | true
    _avg?: ProgressoAvaliacaoAvgAggregateInputType
    _sum?: ProgressoAvaliacaoSumAggregateInputType
    _min?: ProgressoAvaliacaoMinAggregateInputType
    _max?: ProgressoAvaliacaoMaxAggregateInputType
  }

  export type ProgressoAvaliacaoGroupByOutputType = {
    id: number
    alunoId: number
    avaliacaoId: number
    nota: number
    concluido: boolean
    _count: ProgressoAvaliacaoCountAggregateOutputType | null
    _avg: ProgressoAvaliacaoAvgAggregateOutputType | null
    _sum: ProgressoAvaliacaoSumAggregateOutputType | null
    _min: ProgressoAvaliacaoMinAggregateOutputType | null
    _max: ProgressoAvaliacaoMaxAggregateOutputType | null
  }

  type GetProgressoAvaliacaoGroupByPayload<T extends ProgressoAvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoAvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoAvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoAvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoAvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoAvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    avaliacaoId?: boolean
    nota?: boolean
    concluido?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoAvaliacao"]>



  export type ProgressoAvaliacaoSelectScalar = {
    id?: boolean
    alunoId?: boolean
    avaliacaoId?: boolean
    nota?: boolean
    concluido?: boolean
  }

  export type ProgressoAvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "avaliacaoId" | "nota" | "concluido", ExtArgs["result"]["progressoAvaliacao"]>
  export type ProgressoAvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }

  export type $ProgressoAvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressoAvaliacao"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      avaliacaoId: number
      nota: number
      concluido: boolean
    }, ExtArgs["result"]["progressoAvaliacao"]>
    composites: {}
  }

  type ProgressoAvaliacaoGetPayload<S extends boolean | null | undefined | ProgressoAvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$ProgressoAvaliacaoPayload, S>

  type ProgressoAvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressoAvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoAvaliacaoCountAggregateInputType | true
    }

  export interface ProgressoAvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressoAvaliacao'], meta: { name: 'ProgressoAvaliacao' } }
    /**
     * Find zero or one ProgressoAvaliacao that matches the filter.
     * @param {ProgressoAvaliacaoFindUniqueArgs} args - Arguments to find a ProgressoAvaliacao
     * @example
     * // Get one ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoAvaliacaoFindUniqueArgs>(args: SelectSubset<T, ProgressoAvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressoAvaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressoAvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a ProgressoAvaliacao
     * @example
     * // Get one ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoAvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoAvaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoFindFirstArgs} args - Arguments to find a ProgressoAvaliacao
     * @example
     * // Get one ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoAvaliacaoFindFirstArgs>(args?: SelectSubset<T, ProgressoAvaliacaoFindFirstArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoAvaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoFindFirstOrThrowArgs} args - Arguments to find a ProgressoAvaliacao
     * @example
     * // Get one ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoAvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoAvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressoAvaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressoAvaliacaos
     * const progressoAvaliacaos = await prisma.progressoAvaliacao.findMany()
     * 
     * // Get first 10 ProgressoAvaliacaos
     * const progressoAvaliacaos = await prisma.progressoAvaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressoAvaliacaoWithIdOnly = await prisma.progressoAvaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressoAvaliacaoFindManyArgs>(args?: SelectSubset<T, ProgressoAvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressoAvaliacao.
     * @param {ProgressoAvaliacaoCreateArgs} args - Arguments to create a ProgressoAvaliacao.
     * @example
     * // Create one ProgressoAvaliacao
     * const ProgressoAvaliacao = await prisma.progressoAvaliacao.create({
     *   data: {
     *     // ... data to create a ProgressoAvaliacao
     *   }
     * })
     * 
     */
    create<T extends ProgressoAvaliacaoCreateArgs>(args: SelectSubset<T, ProgressoAvaliacaoCreateArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressoAvaliacaos.
     * @param {ProgressoAvaliacaoCreateManyArgs} args - Arguments to create many ProgressoAvaliacaos.
     * @example
     * // Create many ProgressoAvaliacaos
     * const progressoAvaliacao = await prisma.progressoAvaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoAvaliacaoCreateManyArgs>(args?: SelectSubset<T, ProgressoAvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgressoAvaliacao.
     * @param {ProgressoAvaliacaoDeleteArgs} args - Arguments to delete one ProgressoAvaliacao.
     * @example
     * // Delete one ProgressoAvaliacao
     * const ProgressoAvaliacao = await prisma.progressoAvaliacao.delete({
     *   where: {
     *     // ... filter to delete one ProgressoAvaliacao
     *   }
     * })
     * 
     */
    delete<T extends ProgressoAvaliacaoDeleteArgs>(args: SelectSubset<T, ProgressoAvaliacaoDeleteArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressoAvaliacao.
     * @param {ProgressoAvaliacaoUpdateArgs} args - Arguments to update one ProgressoAvaliacao.
     * @example
     * // Update one ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoAvaliacaoUpdateArgs>(args: SelectSubset<T, ProgressoAvaliacaoUpdateArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressoAvaliacaos.
     * @param {ProgressoAvaliacaoDeleteManyArgs} args - Arguments to filter ProgressoAvaliacaos to delete.
     * @example
     * // Delete a few ProgressoAvaliacaos
     * const { count } = await prisma.progressoAvaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoAvaliacaoDeleteManyArgs>(args?: SelectSubset<T, ProgressoAvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressoAvaliacaos
     * const progressoAvaliacao = await prisma.progressoAvaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoAvaliacaoUpdateManyArgs>(args: SelectSubset<T, ProgressoAvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressoAvaliacao.
     * @param {ProgressoAvaliacaoUpsertArgs} args - Arguments to update or create a ProgressoAvaliacao.
     * @example
     * // Update or create a ProgressoAvaliacao
     * const progressoAvaliacao = await prisma.progressoAvaliacao.upsert({
     *   create: {
     *     // ... data to create a ProgressoAvaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressoAvaliacao we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoAvaliacaoUpsertArgs>(args: SelectSubset<T, ProgressoAvaliacaoUpsertArgs<ExtArgs>>): Prisma__ProgressoAvaliacaoClient<$Result.GetResult<Prisma.$ProgressoAvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoCountArgs} args - Arguments to filter ProgressoAvaliacaos to count.
     * @example
     * // Count the number of ProgressoAvaliacaos
     * const count = await prisma.progressoAvaliacao.count({
     *   where: {
     *     // ... the filter for the ProgressoAvaliacaos we want to count
     *   }
     * })
    **/
    count<T extends ProgressoAvaliacaoCountArgs>(
      args?: Subset<T, ProgressoAvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoAvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressoAvaliacaoAggregateArgs>(args: Subset<T, ProgressoAvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetProgressoAvaliacaoAggregateType<T>>

    /**
     * Group by ProgressoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends ProgressoAvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoAvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoAvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressoAvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressoAvaliacao model
   */
  readonly fields: ProgressoAvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressoAvaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoAvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressoAvaliacao model
   */
  interface ProgressoAvaliacaoFieldRefs {
    readonly id: FieldRef<"ProgressoAvaliacao", 'Int'>
    readonly alunoId: FieldRef<"ProgressoAvaliacao", 'Int'>
    readonly avaliacaoId: FieldRef<"ProgressoAvaliacao", 'Int'>
    readonly nota: FieldRef<"ProgressoAvaliacao", 'Float'>
    readonly concluido: FieldRef<"ProgressoAvaliacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProgressoAvaliacao findUnique
   */
  export type ProgressoAvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAvaliacao to fetch.
     */
    where: ProgressoAvaliacaoWhereUniqueInput
  }

  /**
   * ProgressoAvaliacao findUniqueOrThrow
   */
  export type ProgressoAvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAvaliacao to fetch.
     */
    where: ProgressoAvaliacaoWhereUniqueInput
  }

  /**
   * ProgressoAvaliacao findFirst
   */
  export type ProgressoAvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAvaliacao to fetch.
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAvaliacaos to fetch.
     */
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAvaliacaos.
     */
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAvaliacaos.
     */
    distinct?: ProgressoAvaliacaoScalarFieldEnum | ProgressoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ProgressoAvaliacao findFirstOrThrow
   */
  export type ProgressoAvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAvaliacao to fetch.
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAvaliacaos to fetch.
     */
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAvaliacaos.
     */
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAvaliacaos.
     */
    distinct?: ProgressoAvaliacaoScalarFieldEnum | ProgressoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ProgressoAvaliacao findMany
   */
  export type ProgressoAvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAvaliacaos to fetch.
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAvaliacaos to fetch.
     */
    orderBy?: ProgressoAvaliacaoOrderByWithRelationInput | ProgressoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressoAvaliacaos.
     */
    cursor?: ProgressoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAvaliacaos.
     */
    skip?: number
    distinct?: ProgressoAvaliacaoScalarFieldEnum | ProgressoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ProgressoAvaliacao create
   */
  export type ProgressoAvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressoAvaliacao.
     */
    data: XOR<ProgressoAvaliacaoCreateInput, ProgressoAvaliacaoUncheckedCreateInput>
  }

  /**
   * ProgressoAvaliacao createMany
   */
  export type ProgressoAvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressoAvaliacaos.
     */
    data: ProgressoAvaliacaoCreateManyInput | ProgressoAvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressoAvaliacao update
   */
  export type ProgressoAvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressoAvaliacao.
     */
    data: XOR<ProgressoAvaliacaoUpdateInput, ProgressoAvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which ProgressoAvaliacao to update.
     */
    where: ProgressoAvaliacaoWhereUniqueInput
  }

  /**
   * ProgressoAvaliacao updateMany
   */
  export type ProgressoAvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressoAvaliacaos.
     */
    data: XOR<ProgressoAvaliacaoUpdateManyMutationInput, ProgressoAvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which ProgressoAvaliacaos to update
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * Limit how many ProgressoAvaliacaos to update.
     */
    limit?: number
  }

  /**
   * ProgressoAvaliacao upsert
   */
  export type ProgressoAvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressoAvaliacao to update in case it exists.
     */
    where: ProgressoAvaliacaoWhereUniqueInput
    /**
     * In case the ProgressoAvaliacao found by the `where` argument doesn't exist, create a new ProgressoAvaliacao with this data.
     */
    create: XOR<ProgressoAvaliacaoCreateInput, ProgressoAvaliacaoUncheckedCreateInput>
    /**
     * In case the ProgressoAvaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoAvaliacaoUpdateInput, ProgressoAvaliacaoUncheckedUpdateInput>
  }

  /**
   * ProgressoAvaliacao delete
   */
  export type ProgressoAvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which ProgressoAvaliacao to delete.
     */
    where: ProgressoAvaliacaoWhereUniqueInput
  }

  /**
   * ProgressoAvaliacao deleteMany
   */
  export type ProgressoAvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAvaliacaos to delete
     */
    where?: ProgressoAvaliacaoWhereInput
    /**
     * Limit how many ProgressoAvaliacaos to delete.
     */
    limit?: number
  }

  /**
   * ProgressoAvaliacao without action
   */
  export type ProgressoAvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAvaliacao
     */
    select?: ProgressoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAvaliacao
     */
    omit?: ProgressoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Parceria
   */

  export type AggregateParceria = {
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  export type ParceriaAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentual: number | null
  }

  export type ParceriaSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentual: number | null
  }

  export type ParceriaMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricao: string | null
    percentual: number | null
    contratoUrl: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParceriaMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricao: string | null
    percentual: number | null
    contratoUrl: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParceriaCountAggregateOutputType = {
    id: number
    alunoId: number
    descricao: number
    percentual: number
    contratoUrl: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParceriaAvgAggregateInputType = {
    id?: true
    alunoId?: true
    percentual?: true
  }

  export type ParceriaSumAggregateInputType = {
    id?: true
    alunoId?: true
    percentual?: true
  }

  export type ParceriaMinAggregateInputType = {
    id?: true
    alunoId?: true
    descricao?: true
    percentual?: true
    contratoUrl?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParceriaMaxAggregateInputType = {
    id?: true
    alunoId?: true
    descricao?: true
    percentual?: true
    contratoUrl?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParceriaCountAggregateInputType = {
    id?: true
    alunoId?: true
    descricao?: true
    percentual?: true
    contratoUrl?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParceriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceria to aggregate.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcerias
    **/
    _count?: true | ParceriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParceriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParceriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParceriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParceriaMaxAggregateInputType
  }

  export type GetParceriaAggregateType<T extends ParceriaAggregateArgs> = {
        [P in keyof T & keyof AggregateParceria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParceria[P]>
      : GetScalarType<T[P], AggregateParceria[P]>
  }




  export type ParceriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceriaWhereInput
    orderBy?: ParceriaOrderByWithAggregationInput | ParceriaOrderByWithAggregationInput[]
    by: ParceriaScalarFieldEnum[] | ParceriaScalarFieldEnum
    having?: ParceriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParceriaCountAggregateInputType | true
    _avg?: ParceriaAvgAggregateInputType
    _sum?: ParceriaSumAggregateInputType
    _min?: ParceriaMinAggregateInputType
    _max?: ParceriaMaxAggregateInputType
  }

  export type ParceriaGroupByOutputType = {
    id: number
    alunoId: number
    descricao: string
    percentual: number
    contratoUrl: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  type GetParceriaGroupByPayload<T extends ParceriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParceriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParceriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
            : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
        }
      >
    >


  export type ParceriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    descricao?: boolean
    percentual?: boolean
    contratoUrl?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parceria"]>



  export type ParceriaSelectScalar = {
    id?: boolean
    alunoId?: boolean
    descricao?: boolean
    percentual?: boolean
    contratoUrl?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParceriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "descricao" | "percentual" | "contratoUrl" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["parceria"]>
  export type ParceriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ParceriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parceria"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      descricao: string
      percentual: number
      contratoUrl: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parceria"]>
    composites: {}
  }

  type ParceriaGetPayload<S extends boolean | null | undefined | ParceriaDefaultArgs> = $Result.GetResult<Prisma.$ParceriaPayload, S>

  type ParceriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParceriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParceriaCountAggregateInputType | true
    }

  export interface ParceriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parceria'], meta: { name: 'Parceria' } }
    /**
     * Find zero or one Parceria that matches the filter.
     * @param {ParceriaFindUniqueArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParceriaFindUniqueArgs>(args: SelectSubset<T, ParceriaFindUniqueArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parceria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParceriaFindUniqueOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParceriaFindUniqueOrThrowArgs>(args: SelectSubset<T, ParceriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindFirstArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParceriaFindFirstArgs>(args?: SelectSubset<T, ParceriaFindFirstArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindFirstOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParceriaFindFirstOrThrowArgs>(args?: SelectSubset<T, ParceriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcerias
     * const parcerias = await prisma.parceria.findMany()
     * 
     * // Get first 10 Parcerias
     * const parcerias = await prisma.parceria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parceriaWithIdOnly = await prisma.parceria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParceriaFindManyArgs>(args?: SelectSubset<T, ParceriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parceria.
     * @param {ParceriaCreateArgs} args - Arguments to create a Parceria.
     * @example
     * // Create one Parceria
     * const Parceria = await prisma.parceria.create({
     *   data: {
     *     // ... data to create a Parceria
     *   }
     * })
     * 
     */
    create<T extends ParceriaCreateArgs>(args: SelectSubset<T, ParceriaCreateArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcerias.
     * @param {ParceriaCreateManyArgs} args - Arguments to create many Parcerias.
     * @example
     * // Create many Parcerias
     * const parceria = await prisma.parceria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParceriaCreateManyArgs>(args?: SelectSubset<T, ParceriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parceria.
     * @param {ParceriaDeleteArgs} args - Arguments to delete one Parceria.
     * @example
     * // Delete one Parceria
     * const Parceria = await prisma.parceria.delete({
     *   where: {
     *     // ... filter to delete one Parceria
     *   }
     * })
     * 
     */
    delete<T extends ParceriaDeleteArgs>(args: SelectSubset<T, ParceriaDeleteArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parceria.
     * @param {ParceriaUpdateArgs} args - Arguments to update one Parceria.
     * @example
     * // Update one Parceria
     * const parceria = await prisma.parceria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParceriaUpdateArgs>(args: SelectSubset<T, ParceriaUpdateArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcerias.
     * @param {ParceriaDeleteManyArgs} args - Arguments to filter Parcerias to delete.
     * @example
     * // Delete a few Parcerias
     * const { count } = await prisma.parceria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParceriaDeleteManyArgs>(args?: SelectSubset<T, ParceriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcerias
     * const parceria = await prisma.parceria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParceriaUpdateManyArgs>(args: SelectSubset<T, ParceriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parceria.
     * @param {ParceriaUpsertArgs} args - Arguments to update or create a Parceria.
     * @example
     * // Update or create a Parceria
     * const parceria = await prisma.parceria.upsert({
     *   create: {
     *     // ... data to create a Parceria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parceria we want to update
     *   }
     * })
     */
    upsert<T extends ParceriaUpsertArgs>(args: SelectSubset<T, ParceriaUpsertArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaCountArgs} args - Arguments to filter Parcerias to count.
     * @example
     * // Count the number of Parcerias
     * const count = await prisma.parceria.count({
     *   where: {
     *     // ... the filter for the Parcerias we want to count
     *   }
     * })
    **/
    count<T extends ParceriaCountArgs>(
      args?: Subset<T, ParceriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParceriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParceriaAggregateArgs>(args: Subset<T, ParceriaAggregateArgs>): Prisma.PrismaPromise<GetParceriaAggregateType<T>>

    /**
     * Group by Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaGroupByArgs} args - Group by arguments.
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
      T extends ParceriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParceriaGroupByArgs['orderBy'] }
        : { orderBy?: ParceriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParceriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParceriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parceria model
   */
  readonly fields: ParceriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parceria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParceriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Parceria model
   */
  interface ParceriaFieldRefs {
    readonly id: FieldRef<"Parceria", 'Int'>
    readonly alunoId: FieldRef<"Parceria", 'Int'>
    readonly descricao: FieldRef<"Parceria", 'String'>
    readonly percentual: FieldRef<"Parceria", 'Float'>
    readonly contratoUrl: FieldRef<"Parceria", 'String'>
    readonly ativo: FieldRef<"Parceria", 'Boolean'>
    readonly createdAt: FieldRef<"Parceria", 'DateTime'>
    readonly updatedAt: FieldRef<"Parceria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parceria findUnique
   */
  export type ParceriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria findUniqueOrThrow
   */
  export type ParceriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria findFirst
   */
  export type ParceriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria findFirstOrThrow
   */
  export type ParceriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria findMany
   */
  export type ParceriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parcerias to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria create
   */
  export type ParceriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Parceria.
     */
    data: XOR<ParceriaCreateInput, ParceriaUncheckedCreateInput>
  }

  /**
   * Parceria createMany
   */
  export type ParceriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcerias.
     */
    data: ParceriaCreateManyInput | ParceriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceria update
   */
  export type ParceriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Parceria.
     */
    data: XOR<ParceriaUpdateInput, ParceriaUncheckedUpdateInput>
    /**
     * Choose, which Parceria to update.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria updateMany
   */
  export type ParceriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcerias.
     */
    data: XOR<ParceriaUpdateManyMutationInput, ParceriaUncheckedUpdateManyInput>
    /**
     * Filter which Parcerias to update
     */
    where?: ParceriaWhereInput
    /**
     * Limit how many Parcerias to update.
     */
    limit?: number
  }

  /**
   * Parceria upsert
   */
  export type ParceriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Parceria to update in case it exists.
     */
    where: ParceriaWhereUniqueInput
    /**
     * In case the Parceria found by the `where` argument doesn't exist, create a new Parceria with this data.
     */
    create: XOR<ParceriaCreateInput, ParceriaUncheckedCreateInput>
    /**
     * In case the Parceria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParceriaUpdateInput, ParceriaUncheckedUpdateInput>
  }

  /**
   * Parceria delete
   */
  export type ParceriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter which Parceria to delete.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria deleteMany
   */
  export type ParceriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcerias to delete
     */
    where?: ParceriaWhereInput
    /**
     * Limit how many Parcerias to delete.
     */
    limit?: number
  }

  /**
   * Parceria without action
   */
  export type ParceriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
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


  export const PlanoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanoScalarFieldEnum = (typeof PlanoScalarFieldEnum)[keyof typeof PlanoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    dataCadastro: 'dataCadastro',
    planoId: 'planoId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoriaId: 'categoriaId',
    cargaHoraria: 'cargaHoraria'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cursoId: 'cursoId',
    professorId: 'professorId'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const AlunoTurmaScalarFieldEnum: {
    alunoId: 'alunoId',
    turmaId: 'turmaId'
  };

  export type AlunoTurmaScalarFieldEnum = (typeof AlunoTurmaScalarFieldEnum)[keyof typeof AlunoTurmaScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    cursoId: 'cursoId',
    titulo: 'titulo',
    ordem: 'ordem'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    url: 'url',
    duracao: 'duracao'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ApostilaScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    arquivo: 'arquivo'
  };

  export type ApostilaScalarFieldEnum = (typeof ApostilaScalarFieldEnum)[keyof typeof ApostilaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const ProgressoVideoScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    videoId: 'videoId',
    progresso: 'progresso',
    concluido: 'concluido'
  };

  export type ProgressoVideoScalarFieldEnum = (typeof ProgressoVideoScalarFieldEnum)[keyof typeof ProgressoVideoScalarFieldEnum]


  export const ProgressoApostilaScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    apostilaId: 'apostilaId',
    progresso: 'progresso',
    concluido: 'concluido'
  };

  export type ProgressoApostilaScalarFieldEnum = (typeof ProgressoApostilaScalarFieldEnum)[keyof typeof ProgressoApostilaScalarFieldEnum]


  export const ProgressoAvaliacaoScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    avaliacaoId: 'avaliacaoId',
    nota: 'nota',
    concluido: 'concluido'
  };

  export type ProgressoAvaliacaoScalarFieldEnum = (typeof ProgressoAvaliacaoScalarFieldEnum)[keyof typeof ProgressoAvaliacaoScalarFieldEnum]


  export const ParceriaScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    descricao: 'descricao',
    percentual: 'percentual',
    contratoUrl: 'contratoUrl',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParceriaScalarFieldEnum = (typeof ParceriaScalarFieldEnum)[keyof typeof ParceriaScalarFieldEnum]


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


  export const PlanoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type PlanoOrderByRelevanceFieldEnum = (typeof PlanoOrderByRelevanceFieldEnum)[keyof typeof PlanoOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const CursoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type CursoOrderByRelevanceFieldEnum = (typeof CursoOrderByRelevanceFieldEnum)[keyof typeof CursoOrderByRelevanceFieldEnum]


  export const TurmaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type TurmaOrderByRelevanceFieldEnum = (typeof TurmaOrderByRelevanceFieldEnum)[keyof typeof TurmaOrderByRelevanceFieldEnum]


  export const ModuloOrderByRelevanceFieldEnum: {
    titulo: 'titulo'
  };

  export type ModuloOrderByRelevanceFieldEnum = (typeof ModuloOrderByRelevanceFieldEnum)[keyof typeof ModuloOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    url: 'url'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  export const ApostilaOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    arquivo: 'arquivo'
  };

  export type ApostilaOrderByRelevanceFieldEnum = (typeof ApostilaOrderByRelevanceFieldEnum)[keyof typeof ApostilaOrderByRelevanceFieldEnum]


  export const AvaliacaoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type AvaliacaoOrderByRelevanceFieldEnum = (typeof AvaliacaoOrderByRelevanceFieldEnum)[keyof typeof AvaliacaoOrderByRelevanceFieldEnum]


  export const ParceriaOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    contratoUrl: 'contratoUrl'
  };

  export type ParceriaOrderByRelevanceFieldEnum = (typeof ParceriaOrderByRelevanceFieldEnum)[keyof typeof ParceriaOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PlanoWhereInput = {
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    id?: IntFilter<"Plano"> | number
    nome?: StringFilter<"Plano"> | string
    descricao?: StringNullableFilter<"Plano"> | string | null
    createdAt?: DateTimeFilter<"Plano"> | Date | string
    updatedAt?: DateTimeFilter<"Plano"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }

  export type PlanoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: PlanoOrderByRelevanceInput
  }

  export type PlanoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    nome?: StringFilter<"Plano"> | string
    descricao?: StringNullableFilter<"Plano"> | string | null
    createdAt?: DateTimeFilter<"Plano"> | Date | string
    updatedAt?: DateTimeFilter<"Plano"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type PlanoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanoCountOrderByAggregateInput
    _avg?: PlanoAvgOrderByAggregateInput
    _max?: PlanoMaxOrderByAggregateInput
    _min?: PlanoMinOrderByAggregateInput
    _sum?: PlanoSumOrderByAggregateInput
  }

  export type PlanoScalarWhereWithAggregatesInput = {
    AND?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    OR?: PlanoScalarWhereWithAggregatesInput[]
    NOT?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plano"> | number
    nome?: StringWithAggregatesFilter<"Plano"> | string
    descricao?: StringNullableWithAggregatesFilter<"Plano"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plano"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plano"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    cursos?: CursoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    cursos?: CursoListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntFilter<"Usuario"> | number
    plano?: XOR<PlanoScalarRelationFilter, PlanoWhereInput>
    progressoVideos?: ProgressoVideoListRelationFilter
    progressoApostilas?: ProgressoApostilaListRelationFilter
    progressoAvaliacoes?: ProgressoAvaliacaoListRelationFilter
    turmasComoAluno?: AlunoTurmaListRelationFilter
    turmasComoProfessor?: TurmaListRelationFilter
    parcerias?: ParceriaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
    plano?: PlanoOrderByWithRelationInput
    progressoVideos?: ProgressoVideoOrderByRelationAggregateInput
    progressoApostilas?: ProgressoApostilaOrderByRelationAggregateInput
    progressoAvaliacoes?: ProgressoAvaliacaoOrderByRelationAggregateInput
    turmasComoAluno?: AlunoTurmaOrderByRelationAggregateInput
    turmasComoProfessor?: TurmaOrderByRelationAggregateInput
    parcerias?: ParceriaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntFilter<"Usuario"> | number
    plano?: XOR<PlanoScalarRelationFilter, PlanoWhereInput>
    progressoVideos?: ProgressoVideoListRelationFilter
    progressoApostilas?: ProgressoApostilaListRelationFilter
    progressoAvaliacoes?: ProgressoAvaliacaoListRelationFilter
    turmasComoAluno?: AlunoTurmaListRelationFilter
    turmasComoProfessor?: TurmaListRelationFilter
    parcerias?: ParceriaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    planoId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    categoriaId?: IntFilter<"Curso"> | number
    cargaHoraria?: IntFilter<"Curso"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    turmas?: TurmaListRelationFilter
    modulos?: ModuloListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    turmas?: TurmaOrderByRelationAggregateInput
    modulos?: ModuloOrderByRelationAggregateInput
    _relevance?: CursoOrderByRelevanceInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    categoriaId?: IntFilter<"Curso"> | number
    cargaHoraria?: IntFilter<"Curso"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    turmas?: TurmaListRelationFilter
    modulos?: ModuloListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    titulo?: StringWithAggregatesFilter<"Curso"> | string
    descricao?: StringWithAggregatesFilter<"Curso"> | string
    categoriaId?: IntWithAggregatesFilter<"Curso"> | number
    cargaHoraria?: IntWithAggregatesFilter<"Curso"> | number
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    alunos?: AlunoTurmaListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    curso?: CursoOrderByWithRelationInput
    professor?: UsuarioOrderByWithRelationInput
    alunos?: AlunoTurmaOrderByRelationAggregateInput
    _relevance?: TurmaOrderByRelevanceInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    alunos?: AlunoTurmaListRelationFilter
  }, "id">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turma"> | number
    nome?: StringWithAggregatesFilter<"Turma"> | string
    cursoId?: IntWithAggregatesFilter<"Turma"> | number
    professorId?: IntWithAggregatesFilter<"Turma"> | number
  }

  export type AlunoTurmaWhereInput = {
    AND?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    OR?: AlunoTurmaWhereInput[]
    NOT?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }

  export type AlunoTurmaOrderByWithRelationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
  }

  export type AlunoTurmaWhereUniqueInput = Prisma.AtLeast<{
    alunoId_turmaId?: AlunoTurmaAlunoIdTurmaIdCompoundUniqueInput
    AND?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    OR?: AlunoTurmaWhereInput[]
    NOT?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }, "alunoId_turmaId">

  export type AlunoTurmaOrderByWithAggregationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    _count?: AlunoTurmaCountOrderByAggregateInput
    _avg?: AlunoTurmaAvgOrderByAggregateInput
    _max?: AlunoTurmaMaxOrderByAggregateInput
    _min?: AlunoTurmaMinOrderByAggregateInput
    _sum?: AlunoTurmaSumOrderByAggregateInput
  }

  export type AlunoTurmaScalarWhereWithAggregatesInput = {
    AND?: AlunoTurmaScalarWhereWithAggregatesInput | AlunoTurmaScalarWhereWithAggregatesInput[]
    OR?: AlunoTurmaScalarWhereWithAggregatesInput[]
    NOT?: AlunoTurmaScalarWhereWithAggregatesInput | AlunoTurmaScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"AlunoTurma"> | number
    turmaId?: IntWithAggregatesFilter<"AlunoTurma"> | number
  }

  export type ModuloWhereInput = {
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    videos?: VideoListRelationFilter
    apostilas?: ApostilaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type ModuloOrderByWithRelationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    curso?: CursoOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
    apostilas?: ApostilaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    _relevance?: ModuloOrderByRelevanceInput
  }

  export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    videos?: VideoListRelationFilter
    apostilas?: ApostilaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type ModuloOrderByWithAggregationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    _count?: ModuloCountOrderByAggregateInput
    _avg?: ModuloAvgOrderByAggregateInput
    _max?: ModuloMaxOrderByAggregateInput
    _min?: ModuloMinOrderByAggregateInput
    _sum?: ModuloSumOrderByAggregateInput
  }

  export type ModuloScalarWhereWithAggregatesInput = {
    AND?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    OR?: ModuloScalarWhereWithAggregatesInput[]
    NOT?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Modulo"> | number
    cursoId?: IntWithAggregatesFilter<"Modulo"> | number
    titulo?: StringWithAggregatesFilter<"Modulo"> | string
    ordem?: IntWithAggregatesFilter<"Modulo"> | number
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoVideoListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    duracao?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoVideoOrderByRelationAggregateInput
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoVideoListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    duracao?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    moduloId?: IntWithAggregatesFilter<"Video"> | number
    titulo?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    duracao?: IntWithAggregatesFilter<"Video"> | number
  }

  export type ApostilaWhereInput = {
    AND?: ApostilaWhereInput | ApostilaWhereInput[]
    OR?: ApostilaWhereInput[]
    NOT?: ApostilaWhereInput | ApostilaWhereInput[]
    id?: IntFilter<"Apostila"> | number
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivo?: StringFilter<"Apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoApostilaListRelationFilter
  }

  export type ApostilaOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivo?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoApostilaOrderByRelationAggregateInput
    _relevance?: ApostilaOrderByRelevanceInput
  }

  export type ApostilaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApostilaWhereInput | ApostilaWhereInput[]
    OR?: ApostilaWhereInput[]
    NOT?: ApostilaWhereInput | ApostilaWhereInput[]
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivo?: StringFilter<"Apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoApostilaListRelationFilter
  }, "id">

  export type ApostilaOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivo?: SortOrder
    _count?: ApostilaCountOrderByAggregateInput
    _avg?: ApostilaAvgOrderByAggregateInput
    _max?: ApostilaMaxOrderByAggregateInput
    _min?: ApostilaMinOrderByAggregateInput
    _sum?: ApostilaSumOrderByAggregateInput
  }

  export type ApostilaScalarWhereWithAggregatesInput = {
    AND?: ApostilaScalarWhereWithAggregatesInput | ApostilaScalarWhereWithAggregatesInput[]
    OR?: ApostilaScalarWhereWithAggregatesInput[]
    NOT?: ApostilaScalarWhereWithAggregatesInput | ApostilaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apostila"> | number
    moduloId?: IntWithAggregatesFilter<"Apostila"> | number
    titulo?: StringWithAggregatesFilter<"Apostila"> | string
    arquivo?: StringWithAggregatesFilter<"Apostila"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAvaliacaoListRelationFilter
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoAvaliacaoOrderByRelationAggregateInput
    _relevance?: AvaliacaoOrderByRelevanceInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAvaliacaoListRelationFilter
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    moduloId?: IntWithAggregatesFilter<"Avaliacao"> | number
    titulo?: StringWithAggregatesFilter<"Avaliacao"> | string
    descricao?: StringWithAggregatesFilter<"Avaliacao"> | string
  }

  export type ProgressoVideoWhereInput = {
    AND?: ProgressoVideoWhereInput | ProgressoVideoWhereInput[]
    OR?: ProgressoVideoWhereInput[]
    NOT?: ProgressoVideoWhereInput | ProgressoVideoWhereInput[]
    id?: IntFilter<"ProgressoVideo"> | number
    alunoId?: IntFilter<"ProgressoVideo"> | number
    videoId?: IntFilter<"ProgressoVideo"> | number
    progresso?: IntFilter<"ProgressoVideo"> | number
    concluido?: BoolFilter<"ProgressoVideo"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type ProgressoVideoOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type ProgressoVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    alunoId_videoId?: ProgressoVideoAlunoIdVideoIdCompoundUniqueInput
    AND?: ProgressoVideoWhereInput | ProgressoVideoWhereInput[]
    OR?: ProgressoVideoWhereInput[]
    NOT?: ProgressoVideoWhereInput | ProgressoVideoWhereInput[]
    alunoId?: IntFilter<"ProgressoVideo"> | number
    videoId?: IntFilter<"ProgressoVideo"> | number
    progresso?: IntFilter<"ProgressoVideo"> | number
    concluido?: BoolFilter<"ProgressoVideo"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "alunoId_videoId">

  export type ProgressoVideoOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    _count?: ProgressoVideoCountOrderByAggregateInput
    _avg?: ProgressoVideoAvgOrderByAggregateInput
    _max?: ProgressoVideoMaxOrderByAggregateInput
    _min?: ProgressoVideoMinOrderByAggregateInput
    _sum?: ProgressoVideoSumOrderByAggregateInput
  }

  export type ProgressoVideoScalarWhereWithAggregatesInput = {
    AND?: ProgressoVideoScalarWhereWithAggregatesInput | ProgressoVideoScalarWhereWithAggregatesInput[]
    OR?: ProgressoVideoScalarWhereWithAggregatesInput[]
    NOT?: ProgressoVideoScalarWhereWithAggregatesInput | ProgressoVideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgressoVideo"> | number
    alunoId?: IntWithAggregatesFilter<"ProgressoVideo"> | number
    videoId?: IntWithAggregatesFilter<"ProgressoVideo"> | number
    progresso?: IntWithAggregatesFilter<"ProgressoVideo"> | number
    concluido?: BoolWithAggregatesFilter<"ProgressoVideo"> | boolean
  }

  export type ProgressoApostilaWhereInput = {
    AND?: ProgressoApostilaWhereInput | ProgressoApostilaWhereInput[]
    OR?: ProgressoApostilaWhereInput[]
    NOT?: ProgressoApostilaWhereInput | ProgressoApostilaWhereInput[]
    id?: IntFilter<"ProgressoApostila"> | number
    alunoId?: IntFilter<"ProgressoApostila"> | number
    apostilaId?: IntFilter<"ProgressoApostila"> | number
    progresso?: IntFilter<"ProgressoApostila"> | number
    concluido?: BoolFilter<"ProgressoApostila"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, ApostilaWhereInput>
  }

  export type ProgressoApostilaOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    apostila?: ApostilaOrderByWithRelationInput
  }

  export type ProgressoApostilaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    alunoId_apostilaId?: ProgressoApostilaAlunoIdApostilaIdCompoundUniqueInput
    AND?: ProgressoApostilaWhereInput | ProgressoApostilaWhereInput[]
    OR?: ProgressoApostilaWhereInput[]
    NOT?: ProgressoApostilaWhereInput | ProgressoApostilaWhereInput[]
    alunoId?: IntFilter<"ProgressoApostila"> | number
    apostilaId?: IntFilter<"ProgressoApostila"> | number
    progresso?: IntFilter<"ProgressoApostila"> | number
    concluido?: BoolFilter<"ProgressoApostila"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, ApostilaWhereInput>
  }, "id" | "alunoId_apostilaId">

  export type ProgressoApostilaOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    _count?: ProgressoApostilaCountOrderByAggregateInput
    _avg?: ProgressoApostilaAvgOrderByAggregateInput
    _max?: ProgressoApostilaMaxOrderByAggregateInput
    _min?: ProgressoApostilaMinOrderByAggregateInput
    _sum?: ProgressoApostilaSumOrderByAggregateInput
  }

  export type ProgressoApostilaScalarWhereWithAggregatesInput = {
    AND?: ProgressoApostilaScalarWhereWithAggregatesInput | ProgressoApostilaScalarWhereWithAggregatesInput[]
    OR?: ProgressoApostilaScalarWhereWithAggregatesInput[]
    NOT?: ProgressoApostilaScalarWhereWithAggregatesInput | ProgressoApostilaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgressoApostila"> | number
    alunoId?: IntWithAggregatesFilter<"ProgressoApostila"> | number
    apostilaId?: IntWithAggregatesFilter<"ProgressoApostila"> | number
    progresso?: IntWithAggregatesFilter<"ProgressoApostila"> | number
    concluido?: BoolWithAggregatesFilter<"ProgressoApostila"> | boolean
  }

  export type ProgressoAvaliacaoWhereInput = {
    AND?: ProgressoAvaliacaoWhereInput | ProgressoAvaliacaoWhereInput[]
    OR?: ProgressoAvaliacaoWhereInput[]
    NOT?: ProgressoAvaliacaoWhereInput | ProgressoAvaliacaoWhereInput[]
    id?: IntFilter<"ProgressoAvaliacao"> | number
    alunoId?: IntFilter<"ProgressoAvaliacao"> | number
    avaliacaoId?: IntFilter<"ProgressoAvaliacao"> | number
    nota?: FloatFilter<"ProgressoAvaliacao"> | number
    concluido?: BoolFilter<"ProgressoAvaliacao"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }

  export type ProgressoAvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
    concluido?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByWithRelationInput
  }

  export type ProgressoAvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    alunoId_avaliacaoId?: ProgressoAvaliacaoAlunoIdAvaliacaoIdCompoundUniqueInput
    AND?: ProgressoAvaliacaoWhereInput | ProgressoAvaliacaoWhereInput[]
    OR?: ProgressoAvaliacaoWhereInput[]
    NOT?: ProgressoAvaliacaoWhereInput | ProgressoAvaliacaoWhereInput[]
    alunoId?: IntFilter<"ProgressoAvaliacao"> | number
    avaliacaoId?: IntFilter<"ProgressoAvaliacao"> | number
    nota?: FloatFilter<"ProgressoAvaliacao"> | number
    concluido?: BoolFilter<"ProgressoAvaliacao"> | boolean
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }, "id" | "alunoId_avaliacaoId">

  export type ProgressoAvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
    concluido?: SortOrder
    _count?: ProgressoAvaliacaoCountOrderByAggregateInput
    _avg?: ProgressoAvaliacaoAvgOrderByAggregateInput
    _max?: ProgressoAvaliacaoMaxOrderByAggregateInput
    _min?: ProgressoAvaliacaoMinOrderByAggregateInput
    _sum?: ProgressoAvaliacaoSumOrderByAggregateInput
  }

  export type ProgressoAvaliacaoScalarWhereWithAggregatesInput = {
    AND?: ProgressoAvaliacaoScalarWhereWithAggregatesInput | ProgressoAvaliacaoScalarWhereWithAggregatesInput[]
    OR?: ProgressoAvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: ProgressoAvaliacaoScalarWhereWithAggregatesInput | ProgressoAvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgressoAvaliacao"> | number
    alunoId?: IntWithAggregatesFilter<"ProgressoAvaliacao"> | number
    avaliacaoId?: IntWithAggregatesFilter<"ProgressoAvaliacao"> | number
    nota?: FloatWithAggregatesFilter<"ProgressoAvaliacao"> | number
    concluido?: BoolWithAggregatesFilter<"ProgressoAvaliacao"> | boolean
  }

  export type ParceriaWhereInput = {
    AND?: ParceriaWhereInput | ParceriaWhereInput[]
    OR?: ParceriaWhereInput[]
    NOT?: ParceriaWhereInput | ParceriaWhereInput[]
    id?: IntFilter<"Parceria"> | number
    alunoId?: IntFilter<"Parceria"> | number
    descricao?: StringFilter<"Parceria"> | string
    percentual?: FloatFilter<"Parceria"> | number
    contratoUrl?: StringFilter<"Parceria"> | string
    ativo?: BoolFilter<"Parceria"> | boolean
    createdAt?: DateTimeFilter<"Parceria"> | Date | string
    updatedAt?: DateTimeFilter<"Parceria"> | Date | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ParceriaOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricao?: SortOrder
    percentual?: SortOrder
    contratoUrl?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    _relevance?: ParceriaOrderByRelevanceInput
  }

  export type ParceriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParceriaWhereInput | ParceriaWhereInput[]
    OR?: ParceriaWhereInput[]
    NOT?: ParceriaWhereInput | ParceriaWhereInput[]
    alunoId?: IntFilter<"Parceria"> | number
    descricao?: StringFilter<"Parceria"> | string
    percentual?: FloatFilter<"Parceria"> | number
    contratoUrl?: StringFilter<"Parceria"> | string
    ativo?: BoolFilter<"Parceria"> | boolean
    createdAt?: DateTimeFilter<"Parceria"> | Date | string
    updatedAt?: DateTimeFilter<"Parceria"> | Date | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ParceriaOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricao?: SortOrder
    percentual?: SortOrder
    contratoUrl?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParceriaCountOrderByAggregateInput
    _avg?: ParceriaAvgOrderByAggregateInput
    _max?: ParceriaMaxOrderByAggregateInput
    _min?: ParceriaMinOrderByAggregateInput
    _sum?: ParceriaSumOrderByAggregateInput
  }

  export type ParceriaScalarWhereWithAggregatesInput = {
    AND?: ParceriaScalarWhereWithAggregatesInput | ParceriaScalarWhereWithAggregatesInput[]
    OR?: ParceriaScalarWhereWithAggregatesInput[]
    NOT?: ParceriaScalarWhereWithAggregatesInput | ParceriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parceria"> | number
    alunoId?: IntWithAggregatesFilter<"Parceria"> | number
    descricao?: StringWithAggregatesFilter<"Parceria"> | string
    percentual?: FloatWithAggregatesFilter<"Parceria"> | number
    contratoUrl?: StringWithAggregatesFilter<"Parceria"> | string
    ativo?: BoolWithAggregatesFilter<"Parceria"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Parceria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parceria"> | Date | string
  }

  export type PlanoCreateInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: CursoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: CursoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: CursoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: CursoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateInput = {
    titulo: string
    descricao: string
    cargaHoraria: number
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    turmas?: TurmaCreateNestedManyWithoutCursoInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    cargaHoraria: number
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    cargaHoraria: number
  }

  export type CursoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type TurmaCreateInput = {
    nome: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: UsuarioCreateNestedOneWithoutTurmasComoProfessorInput
    alunos?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    alunos?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: UsuarioUpdateOneRequiredWithoutTurmasComoProfessorNestedInput
    alunos?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
  }

  export type TurmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaCreateInput = {
    aluno: UsuarioCreateNestedOneWithoutTurmasComoAlunoInput
    turma: TurmaCreateNestedOneWithoutAlunosInput
  }

  export type AlunoTurmaUncheckedCreateInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaUpdateInput = {
    aluno?: UsuarioUpdateOneRequiredWithoutTurmasComoAlunoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type AlunoTurmaUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaCreateManyInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaUpdateManyMutationInput = {

  }

  export type AlunoTurmaUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloCreateInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloCreateManyInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
  }

  export type ModuloUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateInput = {
    titulo: string
    url: string
    duracao: number
    modulo: ModuloCreateNestedOneWithoutVideosInput
    progresso?: ProgressoVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    url: string
    duracao: number
    progresso?: ProgressoVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutVideosNestedInput
    progresso?: ProgressoVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    url: string
    duracao: number
  }

  export type VideoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type ApostilaCreateInput = {
    titulo: string
    arquivo: string
    modulo: ModuloCreateNestedOneWithoutApostilasInput
    progresso?: ProgressoApostilaCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivo: string
    progresso?: ProgressoApostilaUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutApostilasNestedInput
    progresso?: ProgressoApostilaUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoApostilaUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivo: string
  }

  export type ApostilaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
  }

  export type ApostilaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    titulo: string
    descricao: string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
    progresso?: ProgressoAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
    progresso?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
    progresso?: ProgressoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoVideoCreateInput = {
    progresso: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoVideosInput
    video: VideoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoVideoUncheckedCreateInput = {
    id?: number
    alunoId: number
    videoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoVideoUpdateInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoVideosNestedInput
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoVideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoVideoCreateManyInput = {
    id?: number
    alunoId: number
    videoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoVideoUpdateManyMutationInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoVideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaCreateInput = {
    progresso: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoApostilasInput
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoApostilaUncheckedCreateInput = {
    id?: number
    alunoId: number
    apostilaId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaUpdateInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoApostilasNestedInput
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoApostilaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaCreateManyInput = {
    id?: number
    alunoId: number
    apostilaId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaUpdateManyMutationInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoCreateInput = {
    nota: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoAvaliacoesInput
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAvaliacaoUncheckedCreateInput = {
    id?: number
    alunoId: number
    avaliacaoId: number
    nota: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoUpdateInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoAvaliacoesNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoCreateManyInput = {
    id?: number
    alunoId: number
    avaliacaoId: number
    nota: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoUpdateManyMutationInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParceriaCreateInput = {
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aluno: UsuarioCreateNestedOneWithoutParceriasInput
  }

  export type ParceriaUncheckedCreateInput = {
    id?: number
    alunoId: number
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParceriaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: UsuarioUpdateOneRequiredWithoutParceriasNestedInput
  }

  export type ParceriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaCreateManyInput = {
    id?: number
    alunoId: number
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParceriaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanoOrderByRelevanceInput = {
    fields: PlanoOrderByRelevanceFieldEnum | PlanoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlanoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlanoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanoSumOrderByAggregateInput = {
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type PlanoScalarRelationFilter = {
    is?: PlanoWhereInput
    isNot?: PlanoWhereInput
  }

  export type ProgressoVideoListRelationFilter = {
    every?: ProgressoVideoWhereInput
    some?: ProgressoVideoWhereInput
    none?: ProgressoVideoWhereInput
  }

  export type ProgressoApostilaListRelationFilter = {
    every?: ProgressoApostilaWhereInput
    some?: ProgressoApostilaWhereInput
    none?: ProgressoApostilaWhereInput
  }

  export type ProgressoAvaliacaoListRelationFilter = {
    every?: ProgressoAvaliacaoWhereInput
    some?: ProgressoAvaliacaoWhereInput
    none?: ProgressoAvaliacaoWhereInput
  }

  export type AlunoTurmaListRelationFilter = {
    every?: AlunoTurmaWhereInput
    some?: AlunoTurmaWhereInput
    none?: AlunoTurmaWhereInput
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type ParceriaListRelationFilter = {
    every?: ParceriaWhereInput
    some?: ParceriaWhereInput
    none?: ParceriaWhereInput
  }

  export type ProgressoVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressoApostilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressoAvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoTurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParceriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ModuloListRelationFilter = {
    every?: ModuloWhereInput
    some?: ModuloWhereInput
    none?: ModuloWhereInput
  }

  export type ModuloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoOrderByRelevanceInput = {
    fields: CursoOrderByRelevanceFieldEnum | CursoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TurmaOrderByRelevanceInput = {
    fields: TurmaOrderByRelevanceFieldEnum | TurmaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type AlunoTurmaAlunoIdTurmaIdCompoundUniqueInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaCountOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaMinOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaSumOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type ApostilaListRelationFilter = {
    every?: ApostilaWhereInput
    some?: ApostilaWhereInput
    none?: ApostilaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApostilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuloOrderByRelevanceInput = {
    fields: ModuloOrderByRelevanceFieldEnum | ModuloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModuloCountOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMaxOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMinOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloScalarRelationFilter = {
    is?: ModuloWhereInput
    isNot?: ModuloWhereInput
  }

  export type VideoOrderByRelevanceInput = {
    fields: VideoOrderByRelevanceFieldEnum | VideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    duracao?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    duracao?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    duracao?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type ApostilaOrderByRelevanceInput = {
    fields: ApostilaOrderByRelevanceFieldEnum | ApostilaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApostilaCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivo?: SortOrder
  }

  export type ApostilaAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type ApostilaMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivo?: SortOrder
  }

  export type ApostilaMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivo?: SortOrder
  }

  export type ApostilaSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoOrderByRelevanceInput = {
    fields: AvaliacaoOrderByRelevanceFieldEnum | AvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type ProgressoVideoAlunoIdVideoIdCompoundUniqueInput = {
    alunoId: number
    videoId: number
  }

  export type ProgressoVideoCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoVideoAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
  }

  export type ProgressoVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoVideoMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoVideoSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    videoId?: SortOrder
    progresso?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApostilaScalarRelationFilter = {
    is?: ApostilaWhereInput
    isNot?: ApostilaWhereInput
  }

  export type ProgressoApostilaAlunoIdApostilaIdCompoundUniqueInput = {
    alunoId: number
    apostilaId: number
  }

  export type ProgressoApostilaCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoApostilaAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
  }

  export type ProgressoApostilaMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoApostilaMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoApostilaSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    apostilaId?: SortOrder
    progresso?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: AvaliacaoWhereInput
    isNot?: AvaliacaoWhereInput
  }

  export type ProgressoAvaliacaoAlunoIdAvaliacaoIdCompoundUniqueInput = {
    alunoId: number
    avaliacaoId: number
  }

  export type ProgressoAvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoAvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
  }

  export type ProgressoAvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoAvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
    concluido?: SortOrder
  }

  export type ProgressoAvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    avaliacaoId?: SortOrder
    nota?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParceriaOrderByRelevanceInput = {
    fields: ParceriaOrderByRelevanceFieldEnum | ParceriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParceriaCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricao?: SortOrder
    percentual?: SortOrder
    contratoUrl?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParceriaAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentual?: SortOrder
  }

  export type ParceriaMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricao?: SortOrder
    percentual?: SortOrder
    contratoUrl?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParceriaMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricao?: SortOrder
    percentual?: SortOrder
    contratoUrl?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParceriaSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentual?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutPlanoInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPlanoInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPlanoInput | UsuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPlanoInput | UsuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPlanoInput | UsuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPlanoInput | UsuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPlanoInput | UsuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPlanoInput | UsuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type CursoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutCategoriaInput | CursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutCategoriaInput | CursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutCategoriaInput | CursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutCategoriaInput | CursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutCategoriaInput | CursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutCategoriaInput | CursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type PlanoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutUsuariosInput
    connect?: PlanoWhereUniqueInput
  }

  export type ProgressoVideoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput> | ProgressoVideoCreateWithoutAlunoInput[] | ProgressoVideoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutAlunoInput | ProgressoVideoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoVideoCreateManyAlunoInputEnvelope
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
  }

  export type ProgressoApostilaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput> | ProgressoApostilaCreateWithoutAlunoInput[] | ProgressoApostilaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutAlunoInput | ProgressoApostilaCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoApostilaCreateManyAlunoInputEnvelope
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
  }

  export type ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput> | ProgressoAvaliacaoCreateWithoutAlunoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput | ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAlunoInputEnvelope
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
  }

  export type AlunoTurmaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type TurmaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ParceriaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
  }

  export type ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput> | ProgressoVideoCreateWithoutAlunoInput[] | ProgressoVideoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutAlunoInput | ProgressoVideoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoVideoCreateManyAlunoInputEnvelope
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
  }

  export type ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput> | ProgressoApostilaCreateWithoutAlunoInput[] | ProgressoApostilaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutAlunoInput | ProgressoApostilaCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoApostilaCreateManyAlunoInputEnvelope
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
  }

  export type ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput> | ProgressoAvaliacaoCreateWithoutAlunoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput | ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAlunoInputEnvelope
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
  }

  export type AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ParceriaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type PlanoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutUsuariosInput
    upsert?: PlanoUpsertWithoutUsuariosInput
    connect?: PlanoWhereUniqueInput
    update?: XOR<XOR<PlanoUpdateToOneWithWhereWithoutUsuariosInput, PlanoUpdateWithoutUsuariosInput>, PlanoUncheckedUpdateWithoutUsuariosInput>
  }

  export type ProgressoVideoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput> | ProgressoVideoCreateWithoutAlunoInput[] | ProgressoVideoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutAlunoInput | ProgressoVideoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoVideoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoVideoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoVideoCreateManyAlunoInputEnvelope
    set?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    disconnect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    delete?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    update?: ProgressoVideoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoVideoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoVideoUpdateManyWithWhereWithoutAlunoInput | ProgressoVideoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
  }

  export type ProgressoApostilaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput> | ProgressoApostilaCreateWithoutAlunoInput[] | ProgressoApostilaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutAlunoInput | ProgressoApostilaCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoApostilaUpsertWithWhereUniqueWithoutAlunoInput | ProgressoApostilaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoApostilaCreateManyAlunoInputEnvelope
    set?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    disconnect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    delete?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    update?: ProgressoApostilaUpdateWithWhereUniqueWithoutAlunoInput | ProgressoApostilaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoApostilaUpdateManyWithWhereWithoutAlunoInput | ProgressoApostilaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
  }

  export type ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput> | ProgressoAvaliacaoCreateWithoutAlunoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput | ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAlunoInputEnvelope
    set?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    disconnect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    delete?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    update?: ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoAvaliacaoUpdateManyWithWhereWithoutAlunoInput | ProgressoAvaliacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
  }

  export type AlunoTurmaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutAlunoInput | AlunoTurmaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type TurmaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ParceriaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    upsert?: ParceriaUpsertWithWhereUniqueWithoutAlunoInput | ParceriaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    set?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    disconnect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    delete?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    update?: ParceriaUpdateWithWhereUniqueWithoutAlunoInput | ParceriaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ParceriaUpdateManyWithWhereWithoutAlunoInput | ParceriaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
  }

  export type ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput> | ProgressoVideoCreateWithoutAlunoInput[] | ProgressoVideoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutAlunoInput | ProgressoVideoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoVideoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoVideoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoVideoCreateManyAlunoInputEnvelope
    set?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    disconnect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    delete?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    update?: ProgressoVideoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoVideoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoVideoUpdateManyWithWhereWithoutAlunoInput | ProgressoVideoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
  }

  export type ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput> | ProgressoApostilaCreateWithoutAlunoInput[] | ProgressoApostilaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutAlunoInput | ProgressoApostilaCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoApostilaUpsertWithWhereUniqueWithoutAlunoInput | ProgressoApostilaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoApostilaCreateManyAlunoInputEnvelope
    set?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    disconnect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    delete?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    update?: ProgressoApostilaUpdateWithWhereUniqueWithoutAlunoInput | ProgressoApostilaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoApostilaUpdateManyWithWhereWithoutAlunoInput | ProgressoApostilaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
  }

  export type ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput> | ProgressoAvaliacaoCreateWithoutAlunoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput | ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAlunoInputEnvelope
    set?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    disconnect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    delete?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    update?: ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoAvaliacaoUpdateManyWithWhereWithoutAlunoInput | ProgressoAvaliacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutAlunoInput | AlunoTurmaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ParceriaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    upsert?: ParceriaUpsertWithWhereUniqueWithoutAlunoInput | ParceriaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    set?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    disconnect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    delete?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    update?: ParceriaUpdateWithWhereUniqueWithoutAlunoInput | ParceriaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ParceriaUpdateManyWithWhereWithoutAlunoInput | ParceriaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutCursosInput = {
    create?: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutCursosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ModuloCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ModuloUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutCursosInput
    upsert?: CategoriaUpsertWithoutCursosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutCursosInput, CategoriaUpdateWithoutCursosInput>, CategoriaUncheckedUpdateWithoutCursosInput>
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ModuloUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ModuloUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutTurmasInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    connect?: CursoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutTurmasComoProfessorInput = {
    create?: XOR<UsuarioCreateWithoutTurmasComoProfessorInput, UsuarioUncheckedCreateWithoutTurmasComoProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasComoProfessorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AlunoTurmaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    upsert?: CursoUpsertWithoutTurmasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmasInput, CursoUpdateWithoutTurmasInput>, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutTurmasComoProfessorNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurmasComoProfessorInput, UsuarioUncheckedCreateWithoutTurmasComoProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasComoProfessorInput
    upsert?: UsuarioUpsertWithoutTurmasComoProfessorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTurmasComoProfessorInput, UsuarioUpdateWithoutTurmasComoProfessorInput>, UsuarioUncheckedUpdateWithoutTurmasComoProfessorInput>
  }

  export type AlunoTurmaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutTurmaInput | AlunoTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutTurmaInput | AlunoTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTurmasComoAlunoInput = {
    create?: XOR<UsuarioCreateWithoutTurmasComoAlunoInput, UsuarioUncheckedCreateWithoutTurmasComoAlunoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasComoAlunoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutTurmasComoAlunoNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurmasComoAlunoInput, UsuarioUncheckedCreateWithoutTurmasComoAlunoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasComoAlunoInput
    upsert?: UsuarioUpsertWithoutTurmasComoAlunoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTurmasComoAlunoInput, UsuarioUpdateWithoutTurmasComoAlunoInput>, UsuarioUncheckedUpdateWithoutTurmasComoAlunoInput>
  }

  export type TurmaUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    upsert?: TurmaUpsertWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutAlunosInput, TurmaUpdateWithoutAlunosInput>, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type CursoCreateNestedOneWithoutModulosInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    connect?: CursoWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutModuloInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ApostilaCreateNestedManyWithoutModuloInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ApostilaUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutModulosNestedInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    upsert?: CursoUpsertWithoutModulosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutModulosInput, CursoUpdateWithoutModulosInput>, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type VideoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuloInput | VideoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuloInput | VideoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuloInput | VideoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ApostilaUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    upsert?: ApostilaUpsertWithWhereUniqueWithoutModuloInput | ApostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    set?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    disconnect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    delete?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    update?: ApostilaUpdateWithWhereUniqueWithoutModuloInput | ApostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ApostilaUpdateManyWithWhereWithoutModuloInput | ApostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuloInput | VideoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuloInput | VideoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuloInput | VideoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ApostilaUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    upsert?: ApostilaUpsertWithWhereUniqueWithoutModuloInput | ApostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    set?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    disconnect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    delete?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    update?: ApostilaUpdateWithWhereUniqueWithoutModuloInput | ApostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ApostilaUpdateManyWithWhereWithoutModuloInput | ApostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutVideosInput = {
    create?: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutVideosInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoVideoCreateNestedManyWithoutVideoInput = {
    create?: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput> | ProgressoVideoCreateWithoutVideoInput[] | ProgressoVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutVideoInput | ProgressoVideoCreateOrConnectWithoutVideoInput[]
    createMany?: ProgressoVideoCreateManyVideoInputEnvelope
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
  }

  export type ProgressoVideoUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput> | ProgressoVideoCreateWithoutVideoInput[] | ProgressoVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutVideoInput | ProgressoVideoCreateOrConnectWithoutVideoInput[]
    createMany?: ProgressoVideoCreateManyVideoInputEnvelope
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutVideosInput
    upsert?: ModuloUpsertWithoutVideosInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutVideosInput, ModuloUpdateWithoutVideosInput>, ModuloUncheckedUpdateWithoutVideosInput>
  }

  export type ProgressoVideoUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput> | ProgressoVideoCreateWithoutVideoInput[] | ProgressoVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutVideoInput | ProgressoVideoCreateOrConnectWithoutVideoInput[]
    upsert?: ProgressoVideoUpsertWithWhereUniqueWithoutVideoInput | ProgressoVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ProgressoVideoCreateManyVideoInputEnvelope
    set?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    disconnect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    delete?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    update?: ProgressoVideoUpdateWithWhereUniqueWithoutVideoInput | ProgressoVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ProgressoVideoUpdateManyWithWhereWithoutVideoInput | ProgressoVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
  }

  export type ProgressoVideoUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput> | ProgressoVideoCreateWithoutVideoInput[] | ProgressoVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoVideoCreateOrConnectWithoutVideoInput | ProgressoVideoCreateOrConnectWithoutVideoInput[]
    upsert?: ProgressoVideoUpsertWithWhereUniqueWithoutVideoInput | ProgressoVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ProgressoVideoCreateManyVideoInputEnvelope
    set?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    disconnect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    delete?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    connect?: ProgressoVideoWhereUniqueInput | ProgressoVideoWhereUniqueInput[]
    update?: ProgressoVideoUpdateWithWhereUniqueWithoutVideoInput | ProgressoVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ProgressoVideoUpdateManyWithWhereWithoutVideoInput | ProgressoVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutApostilasInput = {
    create?: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutApostilasInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoApostilaCreateNestedManyWithoutApostilaInput = {
    create?: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput> | ProgressoApostilaCreateWithoutApostilaInput[] | ProgressoApostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutApostilaInput | ProgressoApostilaCreateOrConnectWithoutApostilaInput[]
    createMany?: ProgressoApostilaCreateManyApostilaInputEnvelope
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
  }

  export type ProgressoApostilaUncheckedCreateNestedManyWithoutApostilaInput = {
    create?: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput> | ProgressoApostilaCreateWithoutApostilaInput[] | ProgressoApostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutApostilaInput | ProgressoApostilaCreateOrConnectWithoutApostilaInput[]
    createMany?: ProgressoApostilaCreateManyApostilaInputEnvelope
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutApostilasNestedInput = {
    create?: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutApostilasInput
    upsert?: ModuloUpsertWithoutApostilasInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutApostilasInput, ModuloUpdateWithoutApostilasInput>, ModuloUncheckedUpdateWithoutApostilasInput>
  }

  export type ProgressoApostilaUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput> | ProgressoApostilaCreateWithoutApostilaInput[] | ProgressoApostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutApostilaInput | ProgressoApostilaCreateOrConnectWithoutApostilaInput[]
    upsert?: ProgressoApostilaUpsertWithWhereUniqueWithoutApostilaInput | ProgressoApostilaUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: ProgressoApostilaCreateManyApostilaInputEnvelope
    set?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    disconnect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    delete?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    update?: ProgressoApostilaUpdateWithWhereUniqueWithoutApostilaInput | ProgressoApostilaUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: ProgressoApostilaUpdateManyWithWhereWithoutApostilaInput | ProgressoApostilaUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
  }

  export type ProgressoApostilaUncheckedUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput> | ProgressoApostilaCreateWithoutApostilaInput[] | ProgressoApostilaUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoApostilaCreateOrConnectWithoutApostilaInput | ProgressoApostilaCreateOrConnectWithoutApostilaInput[]
    upsert?: ProgressoApostilaUpsertWithWhereUniqueWithoutApostilaInput | ProgressoApostilaUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: ProgressoApostilaCreateManyApostilaInputEnvelope
    set?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    disconnect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    delete?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    connect?: ProgressoApostilaWhereUniqueInput | ProgressoApostilaWhereUniqueInput[]
    update?: ProgressoApostilaUpdateWithWhereUniqueWithoutApostilaInput | ProgressoApostilaUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: ProgressoApostilaUpdateManyWithWhereWithoutApostilaInput | ProgressoApostilaUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoAvaliacaoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAvaliacaoCreateWithoutAvaliacaoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
  }

  export type ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAvaliacaoCreateWithoutAvaliacaoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    upsert?: ModuloUpsertWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutAvaliacoesInput, ModuloUpdateWithoutAvaliacoesInput>, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ProgressoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAvaliacaoCreateWithoutAvaliacaoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    disconnect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    delete?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    update?: ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ProgressoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | ProgressoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
  }

  export type ProgressoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAvaliacaoCreateWithoutAvaliacaoInput[] | ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ProgressoAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    disconnect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    delete?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    connect?: ProgressoAvaliacaoWhereUniqueInput | ProgressoAvaliacaoWhereUniqueInput[]
    update?: ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ProgressoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | ProgressoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProgressoVideosInput = {
    create?: XOR<UsuarioCreateWithoutProgressoVideosInput, UsuarioUncheckedCreateWithoutProgressoVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoVideosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutProgressoInput = {
    create?: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutProgressoInput
    connect?: VideoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutProgressoVideosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgressoVideosInput, UsuarioUncheckedCreateWithoutProgressoVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoVideosInput
    upsert?: UsuarioUpsertWithoutProgressoVideosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgressoVideosInput, UsuarioUpdateWithoutProgressoVideosInput>, UsuarioUncheckedUpdateWithoutProgressoVideosInput>
  }

  export type VideoUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutProgressoInput
    upsert?: VideoUpsertWithoutProgressoInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutProgressoInput, VideoUpdateWithoutProgressoInput>, VideoUncheckedUpdateWithoutProgressoInput>
  }

  export type UsuarioCreateNestedOneWithoutProgressoApostilasInput = {
    create?: XOR<UsuarioCreateWithoutProgressoApostilasInput, UsuarioUncheckedCreateWithoutProgressoApostilasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoApostilasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ApostilaCreateNestedOneWithoutProgressoInput = {
    create?: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: ApostilaCreateOrConnectWithoutProgressoInput
    connect?: ApostilaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutProgressoApostilasNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgressoApostilasInput, UsuarioUncheckedCreateWithoutProgressoApostilasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoApostilasInput
    upsert?: UsuarioUpsertWithoutProgressoApostilasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgressoApostilasInput, UsuarioUpdateWithoutProgressoApostilasInput>, UsuarioUncheckedUpdateWithoutProgressoApostilasInput>
  }

  export type ApostilaUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: ApostilaCreateOrConnectWithoutProgressoInput
    upsert?: ApostilaUpsertWithoutProgressoInput
    connect?: ApostilaWhereUniqueInput
    update?: XOR<XOR<ApostilaUpdateToOneWithWhereWithoutProgressoInput, ApostilaUpdateWithoutProgressoInput>, ApostilaUncheckedUpdateWithoutProgressoInput>
  }

  export type UsuarioCreateNestedOneWithoutProgressoAvaliacoesInput = {
    create?: XOR<UsuarioCreateWithoutProgressoAvaliacoesInput, UsuarioUncheckedCreateWithoutProgressoAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AvaliacaoCreateNestedOneWithoutProgressoInput = {
    create?: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutProgressoInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutProgressoAvaliacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgressoAvaliacoesInput, UsuarioUncheckedCreateWithoutProgressoAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoAvaliacoesInput
    upsert?: UsuarioUpsertWithoutProgressoAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgressoAvaliacoesInput, UsuarioUpdateWithoutProgressoAvaliacoesInput>, UsuarioUncheckedUpdateWithoutProgressoAvaliacoesInput>
  }

  export type AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutProgressoInput
    upsert?: AvaliacaoUpsertWithoutProgressoInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutProgressoInput, AvaliacaoUpdateWithoutProgressoInput>, AvaliacaoUncheckedUpdateWithoutProgressoInput>
  }

  export type UsuarioCreateNestedOneWithoutParceriasInput = {
    create?: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParceriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutParceriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParceriasInput
    upsert?: UsuarioUpsertWithoutParceriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParceriasInput, UsuarioUpdateWithoutParceriasInput>, UsuarioUncheckedUpdateWithoutParceriasInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutPlanoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput>
  }

  export type UsuarioCreateManyPlanoInputEnvelope = {
    data: UsuarioCreateManyPlanoInput | UsuarioCreateManyPlanoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPlanoInput, UsuarioUncheckedUpdateWithoutPlanoInput>
    create: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPlanoInput, UsuarioUncheckedUpdateWithoutPlanoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPlanoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPlanoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntFilter<"Usuario"> | number
  }

  export type CursoCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    cargaHoraria: number
    turmas?: TurmaCreateNestedManyWithoutCursoInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    cargaHoraria: number
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput>
  }

  export type CursoCreateManyCategoriaInputEnvelope = {
    data: CursoCreateManyCategoriaInput | CursoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutCategoriaInput, CursoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutCategoriaInput, CursoUncheckedUpdateWithoutCategoriaInput>
  }

  export type CursoUpdateManyWithWhereWithoutCategoriaInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: IntFilter<"Curso"> | number
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    categoriaId?: IntFilter<"Curso"> | number
    cargaHoraria?: IntFilter<"Curso"> | number
  }

  export type PlanoCreateWithoutUsuariosInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanoCreateOrConnectWithoutUsuariosInput = {
    where: PlanoWhereUniqueInput
    create: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
  }

  export type ProgressoVideoCreateWithoutAlunoInput = {
    progresso: number
    concluido?: boolean
    video: VideoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoVideoUncheckedCreateWithoutAlunoInput = {
    id?: number
    videoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoVideoCreateOrConnectWithoutAlunoInput = {
    where: ProgressoVideoWhereUniqueInput
    create: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoVideoCreateManyAlunoInputEnvelope = {
    data: ProgressoVideoCreateManyAlunoInput | ProgressoVideoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type ProgressoApostilaCreateWithoutAlunoInput = {
    progresso: number
    concluido?: boolean
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoApostilaUncheckedCreateWithoutAlunoInput = {
    id?: number
    apostilaId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaCreateOrConnectWithoutAlunoInput = {
    where: ProgressoApostilaWhereUniqueInput
    create: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoApostilaCreateManyAlunoInputEnvelope = {
    data: ProgressoApostilaCreateManyAlunoInput | ProgressoApostilaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type ProgressoAvaliacaoCreateWithoutAlunoInput = {
    nota: number
    concluido?: boolean
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput = {
    id?: number
    avaliacaoId: number
    nota: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoCreateOrConnectWithoutAlunoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    create: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoAvaliacaoCreateManyAlunoInputEnvelope = {
    data: ProgressoAvaliacaoCreateManyAlunoInput | ProgressoAvaliacaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type AlunoTurmaCreateWithoutAlunoInput = {
    turma: TurmaCreateNestedOneWithoutAlunosInput
  }

  export type AlunoTurmaUncheckedCreateWithoutAlunoInput = {
    turmaId: number
  }

  export type AlunoTurmaCreateOrConnectWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    create: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput>
  }

  export type AlunoTurmaCreateManyAlunoInputEnvelope = {
    data: AlunoTurmaCreateManyAlunoInput | AlunoTurmaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaCreateWithoutProfessorInput = {
    nome: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    alunos?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome: string
    cursoId: number
    alunos?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaCreateManyProfessorInputEnvelope = {
    data: TurmaCreateManyProfessorInput | TurmaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type ParceriaCreateWithoutAlunoInput = {
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParceriaUncheckedCreateWithoutAlunoInput = {
    id?: number
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParceriaCreateOrConnectWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    create: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput>
  }

  export type ParceriaCreateManyAlunoInputEnvelope = {
    data: ParceriaCreateManyAlunoInput | ParceriaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type PlanoUpsertWithoutUsuariosInput = {
    update: XOR<PlanoUpdateWithoutUsuariosInput, PlanoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    where?: PlanoWhereInput
  }

  export type PlanoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PlanoWhereInput
    data: XOR<PlanoUpdateWithoutUsuariosInput, PlanoUncheckedUpdateWithoutUsuariosInput>
  }

  export type PlanoUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoVideoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoVideoWhereUniqueInput
    update: XOR<ProgressoVideoUpdateWithoutAlunoInput, ProgressoVideoUncheckedUpdateWithoutAlunoInput>
    create: XOR<ProgressoVideoCreateWithoutAlunoInput, ProgressoVideoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoVideoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoVideoWhereUniqueInput
    data: XOR<ProgressoVideoUpdateWithoutAlunoInput, ProgressoVideoUncheckedUpdateWithoutAlunoInput>
  }

  export type ProgressoVideoUpdateManyWithWhereWithoutAlunoInput = {
    where: ProgressoVideoScalarWhereInput
    data: XOR<ProgressoVideoUpdateManyMutationInput, ProgressoVideoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ProgressoVideoScalarWhereInput = {
    AND?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
    OR?: ProgressoVideoScalarWhereInput[]
    NOT?: ProgressoVideoScalarWhereInput | ProgressoVideoScalarWhereInput[]
    id?: IntFilter<"ProgressoVideo"> | number
    alunoId?: IntFilter<"ProgressoVideo"> | number
    videoId?: IntFilter<"ProgressoVideo"> | number
    progresso?: IntFilter<"ProgressoVideo"> | number
    concluido?: BoolFilter<"ProgressoVideo"> | boolean
  }

  export type ProgressoApostilaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoApostilaWhereUniqueInput
    update: XOR<ProgressoApostilaUpdateWithoutAlunoInput, ProgressoApostilaUncheckedUpdateWithoutAlunoInput>
    create: XOR<ProgressoApostilaCreateWithoutAlunoInput, ProgressoApostilaUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoApostilaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoApostilaWhereUniqueInput
    data: XOR<ProgressoApostilaUpdateWithoutAlunoInput, ProgressoApostilaUncheckedUpdateWithoutAlunoInput>
  }

  export type ProgressoApostilaUpdateManyWithWhereWithoutAlunoInput = {
    where: ProgressoApostilaScalarWhereInput
    data: XOR<ProgressoApostilaUpdateManyMutationInput, ProgressoApostilaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ProgressoApostilaScalarWhereInput = {
    AND?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
    OR?: ProgressoApostilaScalarWhereInput[]
    NOT?: ProgressoApostilaScalarWhereInput | ProgressoApostilaScalarWhereInput[]
    id?: IntFilter<"ProgressoApostila"> | number
    alunoId?: IntFilter<"ProgressoApostila"> | number
    apostilaId?: IntFilter<"ProgressoApostila"> | number
    progresso?: IntFilter<"ProgressoApostila"> | number
    concluido?: BoolFilter<"ProgressoApostila"> | boolean
  }

  export type ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    update: XOR<ProgressoAvaliacaoUpdateWithoutAlunoInput, ProgressoAvaliacaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<ProgressoAvaliacaoCreateWithoutAlunoInput, ProgressoAvaliacaoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    data: XOR<ProgressoAvaliacaoUpdateWithoutAlunoInput, ProgressoAvaliacaoUncheckedUpdateWithoutAlunoInput>
  }

  export type ProgressoAvaliacaoUpdateManyWithWhereWithoutAlunoInput = {
    where: ProgressoAvaliacaoScalarWhereInput
    data: XOR<ProgressoAvaliacaoUpdateManyMutationInput, ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ProgressoAvaliacaoScalarWhereInput = {
    AND?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
    OR?: ProgressoAvaliacaoScalarWhereInput[]
    NOT?: ProgressoAvaliacaoScalarWhereInput | ProgressoAvaliacaoScalarWhereInput[]
    id?: IntFilter<"ProgressoAvaliacao"> | number
    alunoId?: IntFilter<"ProgressoAvaliacao"> | number
    avaliacaoId?: IntFilter<"ProgressoAvaliacao"> | number
    nota?: FloatFilter<"ProgressoAvaliacao"> | number
    concluido?: BoolFilter<"ProgressoAvaliacao"> | boolean
  }

  export type AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    update: XOR<AlunoTurmaUpdateWithoutAlunoInput, AlunoTurmaUncheckedUpdateWithoutAlunoInput>
    create: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput>
  }

  export type AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    data: XOR<AlunoTurmaUpdateWithoutAlunoInput, AlunoTurmaUncheckedUpdateWithoutAlunoInput>
  }

  export type AlunoTurmaUpdateManyWithWhereWithoutAlunoInput = {
    where: AlunoTurmaScalarWhereInput
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AlunoTurmaScalarWhereInput = {
    AND?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
    OR?: AlunoTurmaScalarWhereInput[]
    NOT?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
  }

  export type TurmaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
  }

  export type TurmaUpdateManyWithWhereWithoutProfessorInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    id?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
  }

  export type ParceriaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    update: XOR<ParceriaUpdateWithoutAlunoInput, ParceriaUncheckedUpdateWithoutAlunoInput>
    create: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput>
  }

  export type ParceriaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    data: XOR<ParceriaUpdateWithoutAlunoInput, ParceriaUncheckedUpdateWithoutAlunoInput>
  }

  export type ParceriaUpdateManyWithWhereWithoutAlunoInput = {
    where: ParceriaScalarWhereInput
    data: XOR<ParceriaUpdateManyMutationInput, ParceriaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ParceriaScalarWhereInput = {
    AND?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
    OR?: ParceriaScalarWhereInput[]
    NOT?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
    id?: IntFilter<"Parceria"> | number
    alunoId?: IntFilter<"Parceria"> | number
    descricao?: StringFilter<"Parceria"> | string
    percentual?: FloatFilter<"Parceria"> | number
    contratoUrl?: StringFilter<"Parceria"> | string
    ativo?: BoolFilter<"Parceria"> | boolean
    createdAt?: DateTimeFilter<"Parceria"> | Date | string
    updatedAt?: DateTimeFilter<"Parceria"> | Date | string
  }

  export type CategoriaCreateWithoutCursosInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutCursosInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutCursosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
  }

  export type TurmaCreateWithoutCursoInput = {
    nome: string
    professor: UsuarioCreateNestedOneWithoutTurmasComoProfessorInput
    alunos?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    id?: number
    nome: string
    professorId: number
    alunos?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloCreateWithoutCursoInput = {
    titulo: string
    ordem: number
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutCursoInput = {
    id?: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloCreateManyCursoInputEnvelope = {
    data: ModuloCreateManyCursoInput | ModuloCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutCursosInput = {
    update: XOR<CategoriaUpdateWithoutCursosInput, CategoriaUncheckedUpdateWithoutCursosInput>
    create: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutCursosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutCursosInput, CategoriaUncheckedUpdateWithoutCursosInput>
  }

  export type CategoriaUpdateWithoutCursosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type ModuloUpsertWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    update: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloUpdateWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    data: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
  }

  export type ModuloUpdateManyWithWhereWithoutCursoInput = {
    where: ModuloScalarWhereInput
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyWithoutCursoInput>
  }

  export type ModuloScalarWhereInput = {
    AND?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    OR?: ModuloScalarWhereInput[]
    NOT?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
  }

  export type CursoCreateWithoutTurmasInput = {
    titulo: string
    descricao: string
    cargaHoraria: number
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTurmasInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    cargaHoraria: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTurmasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
  }

  export type UsuarioCreateWithoutTurmasComoProfessorInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutTurmasComoProfessorInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutTurmasComoProfessorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTurmasComoProfessorInput, UsuarioUncheckedCreateWithoutTurmasComoProfessorInput>
  }

  export type AlunoTurmaCreateWithoutTurmaInput = {
    aluno: UsuarioCreateNestedOneWithoutTurmasComoAlunoInput
  }

  export type AlunoTurmaUncheckedCreateWithoutTurmaInput = {
    alunoId: number
  }

  export type AlunoTurmaCreateOrConnectWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    create: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoTurmaCreateManyTurmaInputEnvelope = {
    data: AlunoTurmaCreateManyTurmaInput | AlunoTurmaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutTurmasInput = {
    update: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type CursoUpdateWithoutTurmasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioUpsertWithoutTurmasComoProfessorInput = {
    update: XOR<UsuarioUpdateWithoutTurmasComoProfessorInput, UsuarioUncheckedUpdateWithoutTurmasComoProfessorInput>
    create: XOR<UsuarioCreateWithoutTurmasComoProfessorInput, UsuarioUncheckedCreateWithoutTurmasComoProfessorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTurmasComoProfessorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTurmasComoProfessorInput, UsuarioUncheckedUpdateWithoutTurmasComoProfessorInput>
  }

  export type UsuarioUpdateWithoutTurmasComoProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTurmasComoProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    update: XOR<AlunoTurmaUpdateWithoutTurmaInput, AlunoTurmaUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    data: XOR<AlunoTurmaUpdateWithoutTurmaInput, AlunoTurmaUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoTurmaUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoTurmaScalarWhereInput
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type UsuarioCreateWithoutTurmasComoAlunoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutTurmasComoAlunoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutTurmasComoAlunoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTurmasComoAlunoInput, UsuarioUncheckedCreateWithoutTurmasComoAlunoInput>
  }

  export type TurmaCreateWithoutAlunosInput = {
    nome: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: UsuarioCreateNestedOneWithoutTurmasComoProfessorInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type UsuarioUpsertWithoutTurmasComoAlunoInput = {
    update: XOR<UsuarioUpdateWithoutTurmasComoAlunoInput, UsuarioUncheckedUpdateWithoutTurmasComoAlunoInput>
    create: XOR<UsuarioCreateWithoutTurmasComoAlunoInput, UsuarioUncheckedCreateWithoutTurmasComoAlunoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTurmasComoAlunoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTurmasComoAlunoInput, UsuarioUncheckedUpdateWithoutTurmasComoAlunoInput>
  }

  export type UsuarioUpdateWithoutTurmasComoAlunoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTurmasComoAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TurmaUpsertWithoutAlunosInput = {
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutAlunosInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateWithoutAlunosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: UsuarioUpdateOneRequiredWithoutTurmasComoProfessorNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateWithoutModulosInput = {
    titulo: string
    descricao: string
    cargaHoraria: number
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutModulosInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    cargaHoraria: number
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutModulosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
  }

  export type VideoCreateWithoutModuloInput = {
    titulo: string
    url: string
    duracao: number
    progresso?: ProgressoVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    url: string
    duracao: number
    progresso?: ProgressoVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutModuloInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput>
  }

  export type VideoCreateManyModuloInputEnvelope = {
    data: VideoCreateManyModuloInput | VideoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type ApostilaCreateWithoutModuloInput = {
    titulo: string
    arquivo: string
    progresso?: ProgressoApostilaCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    arquivo: string
    progresso?: ProgressoApostilaUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaCreateOrConnectWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    create: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput>
  }

  export type ApostilaCreateManyModuloInputEnvelope = {
    data: ApostilaCreateManyModuloInput | ApostilaCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutModuloInput = {
    titulo: string
    descricao: string
    progresso?: ProgressoAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    descricao: string
    progresso?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoCreateManyModuloInputEnvelope = {
    data: AvaliacaoCreateManyModuloInput | AvaliacaoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutModulosInput = {
    update: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutModulosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type CursoUpdateWithoutModulosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutModulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutModuloInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutModuloInput, VideoUncheckedUpdateWithoutModuloInput>
    create: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutModuloInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutModuloInput, VideoUncheckedUpdateWithoutModuloInput>
  }

  export type VideoUpdateManyWithWhereWithoutModuloInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutModuloInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
  }

  export type ApostilaUpsertWithWhereUniqueWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    update: XOR<ApostilaUpdateWithoutModuloInput, ApostilaUncheckedUpdateWithoutModuloInput>
    create: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput>
  }

  export type ApostilaUpdateWithWhereUniqueWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    data: XOR<ApostilaUpdateWithoutModuloInput, ApostilaUncheckedUpdateWithoutModuloInput>
  }

  export type ApostilaUpdateManyWithWhereWithoutModuloInput = {
    where: ApostilaScalarWhereInput
    data: XOR<ApostilaUpdateManyMutationInput, ApostilaUncheckedUpdateManyWithoutModuloInput>
  }

  export type ApostilaScalarWhereInput = {
    AND?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
    OR?: ApostilaScalarWhereInput[]
    NOT?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
    id?: IntFilter<"Apostila"> | number
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivo?: StringFilter<"Apostila"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutModuloInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutModuloInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
  }

  export type ModuloCreateWithoutVideosInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutVideosInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutVideosInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
  }

  export type ProgressoVideoCreateWithoutVideoInput = {
    progresso: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoVideosInput
  }

  export type ProgressoVideoUncheckedCreateWithoutVideoInput = {
    id?: number
    alunoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoVideoCreateOrConnectWithoutVideoInput = {
    where: ProgressoVideoWhereUniqueInput
    create: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput>
  }

  export type ProgressoVideoCreateManyVideoInputEnvelope = {
    data: ProgressoVideoCreateManyVideoInput | ProgressoVideoCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutVideosInput = {
    update: XOR<ModuloUpdateWithoutVideosInput, ModuloUncheckedUpdateWithoutVideosInput>
    create: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutVideosInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutVideosInput, ModuloUncheckedUpdateWithoutVideosInput>
  }

  export type ModuloUpdateWithoutVideosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoVideoUpsertWithWhereUniqueWithoutVideoInput = {
    where: ProgressoVideoWhereUniqueInput
    update: XOR<ProgressoVideoUpdateWithoutVideoInput, ProgressoVideoUncheckedUpdateWithoutVideoInput>
    create: XOR<ProgressoVideoCreateWithoutVideoInput, ProgressoVideoUncheckedCreateWithoutVideoInput>
  }

  export type ProgressoVideoUpdateWithWhereUniqueWithoutVideoInput = {
    where: ProgressoVideoWhereUniqueInput
    data: XOR<ProgressoVideoUpdateWithoutVideoInput, ProgressoVideoUncheckedUpdateWithoutVideoInput>
  }

  export type ProgressoVideoUpdateManyWithWhereWithoutVideoInput = {
    where: ProgressoVideoScalarWhereInput
    data: XOR<ProgressoVideoUpdateManyMutationInput, ProgressoVideoUncheckedUpdateManyWithoutVideoInput>
  }

  export type ModuloCreateWithoutApostilasInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutApostilasInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutApostilasInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
  }

  export type ProgressoApostilaCreateWithoutApostilaInput = {
    progresso: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoApostilasInput
  }

  export type ProgressoApostilaUncheckedCreateWithoutApostilaInput = {
    id?: number
    alunoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaCreateOrConnectWithoutApostilaInput = {
    where: ProgressoApostilaWhereUniqueInput
    create: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput>
  }

  export type ProgressoApostilaCreateManyApostilaInputEnvelope = {
    data: ProgressoApostilaCreateManyApostilaInput | ProgressoApostilaCreateManyApostilaInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutApostilasInput = {
    update: XOR<ModuloUpdateWithoutApostilasInput, ModuloUncheckedUpdateWithoutApostilasInput>
    create: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutApostilasInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutApostilasInput, ModuloUncheckedUpdateWithoutApostilasInput>
  }

  export type ModuloUpdateWithoutApostilasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutApostilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoApostilaUpsertWithWhereUniqueWithoutApostilaInput = {
    where: ProgressoApostilaWhereUniqueInput
    update: XOR<ProgressoApostilaUpdateWithoutApostilaInput, ProgressoApostilaUncheckedUpdateWithoutApostilaInput>
    create: XOR<ProgressoApostilaCreateWithoutApostilaInput, ProgressoApostilaUncheckedCreateWithoutApostilaInput>
  }

  export type ProgressoApostilaUpdateWithWhereUniqueWithoutApostilaInput = {
    where: ProgressoApostilaWhereUniqueInput
    data: XOR<ProgressoApostilaUpdateWithoutApostilaInput, ProgressoApostilaUncheckedUpdateWithoutApostilaInput>
  }

  export type ProgressoApostilaUpdateManyWithWhereWithoutApostilaInput = {
    where: ProgressoApostilaScalarWhereInput
    data: XOR<ProgressoApostilaUpdateManyMutationInput, ProgressoApostilaUncheckedUpdateManyWithoutApostilaInput>
  }

  export type ModuloCreateWithoutAvaliacoesInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutAvaliacoesInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
  }

  export type ProgressoAvaliacaoCreateWithoutAvaliacaoInput = {
    nota: number
    concluido?: boolean
    aluno: UsuarioCreateNestedOneWithoutProgressoAvaliacoesInput
  }

  export type ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    alunoId: number
    nota: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoCreateOrConnectWithoutAvaliacaoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    create: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ProgressoAvaliacaoCreateManyAvaliacaoInputEnvelope = {
    data: ProgressoAvaliacaoCreateManyAvaliacaoInput | ProgressoAvaliacaoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutAvaliacoesInput = {
    update: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ModuloUpdateWithoutAvaliacoesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    update: XOR<ProgressoAvaliacaoUpdateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ProgressoAvaliacaoCreateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ProgressoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: ProgressoAvaliacaoWhereUniqueInput
    data: XOR<ProgressoAvaliacaoUpdateWithoutAvaliacaoInput, ProgressoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ProgressoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: ProgressoAvaliacaoScalarWhereInput
    data: XOR<ProgressoAvaliacaoUpdateManyMutationInput, ProgressoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type UsuarioCreateWithoutProgressoVideosInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutProgressoVideosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutProgressoVideosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgressoVideosInput, UsuarioUncheckedCreateWithoutProgressoVideosInput>
  }

  export type VideoCreateWithoutProgressoInput = {
    titulo: string
    url: string
    duracao: number
    modulo: ModuloCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    url: string
    duracao: number
  }

  export type VideoCreateOrConnectWithoutProgressoInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
  }

  export type UsuarioUpsertWithoutProgressoVideosInput = {
    update: XOR<UsuarioUpdateWithoutProgressoVideosInput, UsuarioUncheckedUpdateWithoutProgressoVideosInput>
    create: XOR<UsuarioCreateWithoutProgressoVideosInput, UsuarioUncheckedCreateWithoutProgressoVideosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgressoVideosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgressoVideosInput, UsuarioUncheckedUpdateWithoutProgressoVideosInput>
  }

  export type UsuarioUpdateWithoutProgressoVideosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgressoVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type VideoUpsertWithoutProgressoInput = {
    update: XOR<VideoUpdateWithoutProgressoInput, VideoUncheckedUpdateWithoutProgressoInput>
    create: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutProgressoInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutProgressoInput, VideoUncheckedUpdateWithoutProgressoInput>
  }

  export type VideoUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutProgressoApostilasInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutProgressoApostilasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutProgressoApostilasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgressoApostilasInput, UsuarioUncheckedCreateWithoutProgressoApostilasInput>
  }

  export type ApostilaCreateWithoutProgressoInput = {
    titulo: string
    arquivo: string
    modulo: ModuloCreateNestedOneWithoutApostilasInput
  }

  export type ApostilaUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivo: string
  }

  export type ApostilaCreateOrConnectWithoutProgressoInput = {
    where: ApostilaWhereUniqueInput
    create: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
  }

  export type UsuarioUpsertWithoutProgressoApostilasInput = {
    update: XOR<UsuarioUpdateWithoutProgressoApostilasInput, UsuarioUncheckedUpdateWithoutProgressoApostilasInput>
    create: XOR<UsuarioCreateWithoutProgressoApostilasInput, UsuarioUncheckedCreateWithoutProgressoApostilasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgressoApostilasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgressoApostilasInput, UsuarioUncheckedUpdateWithoutProgressoApostilasInput>
  }

  export type UsuarioUpdateWithoutProgressoApostilasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgressoApostilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type ApostilaUpsertWithoutProgressoInput = {
    update: XOR<ApostilaUpdateWithoutProgressoInput, ApostilaUncheckedUpdateWithoutProgressoInput>
    create: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    where?: ApostilaWhereInput
  }

  export type ApostilaUpdateToOneWithWhereWithoutProgressoInput = {
    where?: ApostilaWhereInput
    data: XOR<ApostilaUpdateWithoutProgressoInput, ApostilaUncheckedUpdateWithoutProgressoInput>
  }

  export type ApostilaUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutApostilasNestedInput
  }

  export type ApostilaUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutProgressoAvaliacoesInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutProgressoAvaliacoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutProgressoAvaliacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgressoAvaliacoesInput, UsuarioUncheckedCreateWithoutProgressoAvaliacoesInput>
  }

  export type AvaliacaoCreateWithoutProgressoInput = {
    titulo: string
    descricao: string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
  }

  export type AvaliacaoCreateOrConnectWithoutProgressoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
  }

  export type UsuarioUpsertWithoutProgressoAvaliacoesInput = {
    update: XOR<UsuarioUpdateWithoutProgressoAvaliacoesInput, UsuarioUncheckedUpdateWithoutProgressoAvaliacoesInput>
    create: XOR<UsuarioCreateWithoutProgressoAvaliacoesInput, UsuarioUncheckedCreateWithoutProgressoAvaliacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgressoAvaliacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgressoAvaliacoesInput, UsuarioUncheckedUpdateWithoutProgressoAvaliacoesInput>
  }

  export type UsuarioUpdateWithoutProgressoAvaliacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgressoAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AvaliacaoUpsertWithoutProgressoInput = {
    update: XOR<AvaliacaoUpdateWithoutProgressoInput, AvaliacaoUncheckedUpdateWithoutProgressoInput>
    create: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutProgressoInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutProgressoInput, AvaliacaoUncheckedUpdateWithoutProgressoInput>
  }

  export type AvaliacaoUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutParceriasInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano: PlanoCreateNestedOneWithoutUsuariosInput
    progressoVideos?: ProgressoVideoCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaCreateNestedManyWithoutProfessorInput
  }

  export type UsuarioUncheckedCreateWithoutParceriasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId: number
    progressoVideos?: ProgressoVideoUncheckedCreateNestedManyWithoutAlunoInput
    progressoApostilas?: ProgressoApostilaUncheckedCreateNestedManyWithoutAlunoInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoAluno?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
    turmasComoProfessor?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type UsuarioCreateOrConnectWithoutParceriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
  }

  export type UsuarioUpsertWithoutParceriasInput = {
    update: XOR<UsuarioUpdateWithoutParceriasInput, UsuarioUncheckedUpdateWithoutParceriasInput>
    create: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParceriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParceriasInput, UsuarioUncheckedUpdateWithoutParceriasInput>
  }

  export type UsuarioUpdateWithoutParceriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutUsuariosNestedInput
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParceriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: IntFieldUpdateOperationsInput | number
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type UsuarioCreateManyPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
  }

  export type UsuarioUpdateWithoutPlanoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    progressoVideos?: ProgressoVideoUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    progressoVideos?: ProgressoVideoUncheckedUpdateManyWithoutAlunoNestedInput
    progressoApostilas?: ProgressoApostilaUncheckedUpdateManyWithoutAlunoNestedInput
    progressoAvaliacoes?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoAluno?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
    turmasComoProfessor?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    cargaHoraria: number
  }

  export type CursoUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressoVideoCreateManyAlunoInput = {
    id?: number
    videoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaCreateManyAlunoInput = {
    id?: number
    apostilaId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoCreateManyAlunoInput = {
    id?: number
    avaliacaoId: number
    nota: number
    concluido?: boolean
  }

  export type AlunoTurmaCreateManyAlunoInput = {
    turmaId: number
  }

  export type TurmaCreateManyProfessorInput = {
    id?: number
    nome: string
    cursoId: number
  }

  export type ParceriaCreateManyAlunoInput = {
    id?: number
    descricao: string
    percentual: number
    contratoUrl: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressoVideoUpdateWithoutAlunoInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoVideoUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoVideoUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaUpdateWithoutAlunoInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoApostilaUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoUpdateWithoutAlunoInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAvaliacaoUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlunoTurmaUpdateWithoutAlunoInput = {
    turma?: TurmaUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type AlunoTurmaUncheckedUpdateWithoutAlunoInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutAlunoInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type TurmaUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
  }

  export type ParceriaUpdateWithoutAlunoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    contratoUrl?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaCreateManyCursoInput = {
    id?: number
    nome: string
    professorId: number
  }

  export type ModuloCreateManyCursoInput = {
    id?: number
    titulo: string
    ordem: number
  }

  export type TurmaUpdateWithoutCursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    professor?: UsuarioUpdateOneRequiredWithoutTurmasComoProfessorNestedInput
    alunos?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    alunos?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloUpdateWithoutCursoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaCreateManyTurmaInput = {
    alunoId: number
  }

  export type AlunoTurmaUpdateWithoutTurmaInput = {
    aluno?: UsuarioUpdateOneRequiredWithoutTurmasComoAlunoNestedInput
  }

  export type AlunoTurmaUncheckedUpdateWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyModuloInput = {
    id?: number
    titulo: string
    url: string
    duracao: number
  }

  export type ApostilaCreateManyModuloInput = {
    id?: number
    titulo: string
    arquivo: string
  }

  export type AvaliacaoCreateManyModuloInput = {
    id?: number
    titulo: string
    descricao: string
  }

  export type VideoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type ApostilaUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoApostilaUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoApostilaUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivo?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoVideoCreateManyVideoInput = {
    id?: number
    alunoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoVideoUpdateWithoutVideoInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoVideosNestedInput
  }

  export type ProgressoVideoUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoVideoUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaCreateManyApostilaInput = {
    id?: number
    alunoId: number
    progresso: number
    concluido?: boolean
  }

  export type ProgressoApostilaUpdateWithoutApostilaInput = {
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoApostilasNestedInput
  }

  export type ProgressoApostilaUncheckedUpdateWithoutApostilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoApostilaUncheckedUpdateManyWithoutApostilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoCreateManyAvaliacaoInput = {
    id?: number
    alunoId: number
    nota: number
    concluido?: boolean
  }

  export type ProgressoAvaliacaoUpdateWithoutAvaliacaoInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoAvaliacoesNestedInput
  }

  export type ProgressoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProgressoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
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