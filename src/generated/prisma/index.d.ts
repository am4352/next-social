
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
 * Model block
 * 
 */
export type block = $Result.DefaultSelection<Prisma.$blockPayload>
/**
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>
/**
 * Model follower
 * 
 */
export type follower = $Result.DefaultSelection<Prisma.$followerPayload>
/**
 * Model followrequest
 * 
 */
export type followrequest = $Result.DefaultSelection<Prisma.$followrequestPayload>
/**
 * Model like
 * 
 */
export type like = $Result.DefaultSelection<Prisma.$likePayload>
/**
 * Model post
 * 
 */
export type post = $Result.DefaultSelection<Prisma.$postPayload>
/**
 * Model story
 * 
 */
export type story = $Result.DefaultSelection<Prisma.$storyPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blocks
 * const blocks = await prisma.block.findMany()
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
   * // Fetch zero or more Blocks
   * const blocks = await prisma.block.findMany()
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
   * `prisma.block`: Exposes CRUD operations for the **block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.blockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follower`: Exposes CRUD operations for the **follower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.follower.findMany()
    * ```
    */
  get follower(): Prisma.followerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followrequest`: Exposes CRUD operations for the **followrequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followrequests
    * const followrequests = await prisma.followrequest.findMany()
    * ```
    */
  get followrequest(): Prisma.followrequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.likeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.storyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
    block: 'block',
    comment: 'comment',
    follower: 'follower',
    followrequest: 'followrequest',
    like: 'like',
    post: 'post',
    story: 'story',
    user: 'user'
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
      modelProps: "block" | "comment" | "follower" | "followrequest" | "like" | "post" | "story" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      block: {
        payload: Prisma.$blockPayload<ExtArgs>
        fields: Prisma.blockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          findFirst: {
            args: Prisma.blockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          findMany: {
            args: Prisma.blockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>[]
          }
          create: {
            args: Prisma.blockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          createMany: {
            args: Prisma.blockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          update: {
            args: Prisma.blockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          deleteMany: {
            args: Prisma.blockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.blockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.blockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      follower: {
        payload: Prisma.$followerPayload<ExtArgs>
        fields: Prisma.followerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          findFirst: {
            args: Prisma.followerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          findMany: {
            args: Prisma.followerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>[]
          }
          create: {
            args: Prisma.followerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          createMany: {
            args: Prisma.followerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.followerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          update: {
            args: Prisma.followerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          deleteMany: {
            args: Prisma.followerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.followerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followerPayload>
          }
          aggregate: {
            args: Prisma.FollowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollower>
          }
          groupBy: {
            args: Prisma.followerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.followerCountArgs<ExtArgs>
            result: $Utils.Optional<FollowerCountAggregateOutputType> | number
          }
        }
      }
      followrequest: {
        payload: Prisma.$followrequestPayload<ExtArgs>
        fields: Prisma.followrequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followrequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followrequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          findFirst: {
            args: Prisma.followrequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followrequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          findMany: {
            args: Prisma.followrequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>[]
          }
          create: {
            args: Prisma.followrequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          createMany: {
            args: Prisma.followrequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.followrequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          update: {
            args: Prisma.followrequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          deleteMany: {
            args: Prisma.followrequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followrequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.followrequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followrequestPayload>
          }
          aggregate: {
            args: Prisma.FollowrequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowrequest>
          }
          groupBy: {
            args: Prisma.followrequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowrequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.followrequestCountArgs<ExtArgs>
            result: $Utils.Optional<FollowrequestCountAggregateOutputType> | number
          }
        }
      }
      like: {
        payload: Prisma.$likePayload<ExtArgs>
        fields: Prisma.likeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findFirst: {
            args: Prisma.likeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findMany: {
            args: Prisma.likeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>[]
          }
          create: {
            args: Prisma.likeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          createMany: {
            args: Prisma.likeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.likeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          update: {
            args: Prisma.likeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          deleteMany: {
            args: Prisma.likeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.likeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.likeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.likeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      post: {
        payload: Prisma.$postPayload<ExtArgs>
        fields: Prisma.postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findFirst: {
            args: Prisma.postFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findMany: {
            args: Prisma.postFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          create: {
            args: Prisma.postCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          createMany: {
            args: Prisma.postCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          update: {
            args: Prisma.postUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          deleteMany: {
            args: Prisma.postDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.postGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.postCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      story: {
        payload: Prisma.$storyPayload<ExtArgs>
        fields: Prisma.storyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          findFirst: {
            args: Prisma.storyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          findMany: {
            args: Prisma.storyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>[]
          }
          create: {
            args: Prisma.storyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          createMany: {
            args: Prisma.storyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.storyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          update: {
            args: Prisma.storyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          deleteMany: {
            args: Prisma.storyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.storyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.storyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.storyCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    block?: blockOmit
    comment?: commentOmit
    follower?: followerOmit
    followrequest?: followrequestOmit
    like?: likeOmit
    post?: postOmit
    story?: storyOmit
    user?: userOmit
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
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    like: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like?: boolean | CommentCountOutputTypeCountLikeArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comment: number
    like: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | PostCountOutputTypeCountCommentArgs
    like?: boolean | PostCountOutputTypeCountLikeArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    block_block_blockedIdTouser: number
    block_block_blockerIdTouser: number
    comment: number
    follower_follower_followerIdTouser: number
    follower_follower_followingIdTouser: number
    followrequest_followrequest_receiverIdTouser: number
    followrequest_followrequest_senderIdTouser: number
    like: number
    post: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block_block_blockedIdTouser?: boolean | UserCountOutputTypeCountBlock_block_blockedIdTouserArgs
    block_block_blockerIdTouser?: boolean | UserCountOutputTypeCountBlock_block_blockerIdTouserArgs
    comment?: boolean | UserCountOutputTypeCountCommentArgs
    follower_follower_followerIdTouser?: boolean | UserCountOutputTypeCountFollower_follower_followerIdTouserArgs
    follower_follower_followingIdTouser?: boolean | UserCountOutputTypeCountFollower_follower_followingIdTouserArgs
    followrequest_followrequest_receiverIdTouser?: boolean | UserCountOutputTypeCountFollowrequest_followrequest_receiverIdTouserArgs
    followrequest_followrequest_senderIdTouser?: boolean | UserCountOutputTypeCountFollowrequest_followrequest_senderIdTouserArgs
    like?: boolean | UserCountOutputTypeCountLikeArgs
    post?: boolean | UserCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlock_block_blockedIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlock_block_blockerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollower_follower_followerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollower_follower_followingIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowrequest_followrequest_receiverIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followrequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowrequest_followrequest_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followrequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }


  /**
   * Models
   */

  /**
   * Model block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    blockerId: string | null
    blockedId: string | null
  }

  export type BlockMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    blockerId: string | null
    blockedId: string | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    createdAt: number
    blockerId: number
    blockedId: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    createdAt?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    createdAt?: true
    blockerId?: true
    blockedId?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which block to aggregate.
     */
    where?: blockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type blockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockWhereInput
    orderBy?: blockOrderByWithAggregationInput | blockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: blockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: number
    createdAt: Date
    blockerId: string
    blockedId: string
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends blockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type blockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    blockerId?: boolean
    blockedId?: boolean
    user_block_blockedIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_block_blockerIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>



  export type blockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    blockerId?: boolean
    blockedId?: boolean
  }

  export type blockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "blockerId" | "blockedId", ExtArgs["result"]["block"]>
  export type blockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_block_blockedIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_block_blockerIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $blockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "block"
    objects: {
      user_block_blockedIdTouser: Prisma.$userPayload<ExtArgs>
      user_block_blockerIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      blockerId: string
      blockedId: string
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type blockGetPayload<S extends boolean | null | undefined | blockDefaultArgs> = $Result.GetResult<Prisma.$blockPayload, S>

  type blockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface blockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['block'], meta: { name: 'block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {blockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blockFindUniqueArgs>(args: SelectSubset<T, blockFindUniqueArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blockFindUniqueOrThrowArgs>(args: SelectSubset<T, blockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blockFindFirstArgs>(args?: SelectSubset<T, blockFindFirstArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blockFindFirstOrThrowArgs>(args?: SelectSubset<T, blockFindFirstOrThrowArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blockFindManyArgs>(args?: SelectSubset<T, blockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {blockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends blockCreateArgs>(args: SelectSubset<T, blockCreateArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {blockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blockCreateManyArgs>(args?: SelectSubset<T, blockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {blockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends blockDeleteArgs>(args: SelectSubset<T, blockDeleteArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {blockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blockUpdateArgs>(args: SelectSubset<T, blockUpdateArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {blockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blockDeleteManyArgs>(args?: SelectSubset<T, blockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blockUpdateManyArgs>(args: SelectSubset<T, blockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {blockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends blockUpsertArgs>(args: SelectSubset<T, blockUpsertArgs<ExtArgs>>): Prisma__blockClient<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends blockCountArgs>(
      args?: Subset<T, blockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockGroupByArgs} args - Group by arguments.
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
      T extends blockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blockGroupByArgs['orderBy'] }
        : { orderBy?: blockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the block model
   */
  readonly fields: blockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_block_blockedIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_block_blockerIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the block model
   */
  interface blockFieldRefs {
    readonly id: FieldRef<"block", 'Int'>
    readonly createdAt: FieldRef<"block", 'DateTime'>
    readonly blockerId: FieldRef<"block", 'String'>
    readonly blockedId: FieldRef<"block", 'String'>
  }
    

  // Custom InputTypes
  /**
   * block findUnique
   */
  export type blockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter, which block to fetch.
     */
    where: blockWhereUniqueInput
  }

  /**
   * block findUniqueOrThrow
   */
  export type blockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter, which block to fetch.
     */
    where: blockWhereUniqueInput
  }

  /**
   * block findFirst
   */
  export type blockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter, which block to fetch.
     */
    where?: blockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocks.
     */
    cursor?: blockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * block findFirstOrThrow
   */
  export type blockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter, which block to fetch.
     */
    where?: blockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocks.
     */
    cursor?: blockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * block findMany
   */
  export type blockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter, which blocks to fetch.
     */
    where?: blockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocks to fetch.
     */
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blocks.
     */
    cursor?: blockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * block create
   */
  export type blockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * The data needed to create a block.
     */
    data: XOR<blockCreateInput, blockUncheckedCreateInput>
  }

  /**
   * block createMany
   */
  export type blockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blocks.
     */
    data: blockCreateManyInput | blockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * block update
   */
  export type blockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * The data needed to update a block.
     */
    data: XOR<blockUpdateInput, blockUncheckedUpdateInput>
    /**
     * Choose, which block to update.
     */
    where: blockWhereUniqueInput
  }

  /**
   * block updateMany
   */
  export type blockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blocks.
     */
    data: XOR<blockUpdateManyMutationInput, blockUncheckedUpdateManyInput>
    /**
     * Filter which blocks to update
     */
    where?: blockWhereInput
    /**
     * Limit how many blocks to update.
     */
    limit?: number
  }

  /**
   * block upsert
   */
  export type blockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * The filter to search for the block to update in case it exists.
     */
    where: blockWhereUniqueInput
    /**
     * In case the block found by the `where` argument doesn't exist, create a new block with this data.
     */
    create: XOR<blockCreateInput, blockUncheckedCreateInput>
    /**
     * In case the block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blockUpdateInput, blockUncheckedUpdateInput>
  }

  /**
   * block delete
   */
  export type blockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    /**
     * Filter which block to delete.
     */
    where: blockWhereUniqueInput
  }

  /**
   * block deleteMany
   */
  export type blockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocks to delete
     */
    where?: blockWhereInput
    /**
     * Limit how many blocks to delete.
     */
    limit?: number
  }

  /**
   * block without action
   */
  export type blockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
  }


  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    desc: number
    createdAt: number
    updatedAt: number
    userId: number
    postId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    desc: string
    createdAt: Date
    updatedAt: Date
    userId: string
    postId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    like?: boolean | comment$likeArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type commentSelectScalar = {
    id?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "desc" | "createdAt" | "updatedAt" | "userId" | "postId", ExtArgs["result"]["comment"]>
  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    like?: boolean | comment$likeArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      post: Prisma.$postPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      like: Prisma.$likePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      desc: string
      createdAt: Date
      updatedAt: Date
      userId: string
      postId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentFindUniqueArgs>(args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(args: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentFindFirstArgs>(args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentFindManyArgs>(args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends commentCreateArgs>(args: SelectSubset<T, commentCreateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentCreateManyArgs>(args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends commentDeleteArgs>(args: SelectSubset<T, commentDeleteArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentUpdateArgs>(args: SelectSubset<T, commentUpdateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentDeleteManyArgs>(args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentUpdateManyArgs>(args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends commentUpsertArgs>(args: SelectSubset<T, commentUpsertArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
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
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    like<T extends comment$likeArgs<ExtArgs> = {}>(args?: Subset<T, comment$likeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the comment model
   */
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'Int'>
    readonly desc: FieldRef<"comment", 'String'>
    readonly createdAt: FieldRef<"comment", 'DateTime'>
    readonly updatedAt: FieldRef<"comment", 'DateTime'>
    readonly userId: FieldRef<"comment", 'String'>
    readonly postId: FieldRef<"comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comment.like
   */
  export type comment$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Model follower
   */

  export type AggregateFollower = {
    _count: FollowerCountAggregateOutputType | null
    _avg: FollowerAvgAggregateOutputType | null
    _sum: FollowerSumAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  export type FollowerAvgAggregateOutputType = {
    id: number | null
  }

  export type FollowerSumAggregateOutputType = {
    id: number | null
  }

  export type FollowerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    followerId: string | null
    followingId: string | null
  }

  export type FollowerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    followerId: string | null
    followingId: string | null
  }

  export type FollowerCountAggregateOutputType = {
    id: number
    createdAt: number
    followerId: number
    followingId: number
    _all: number
  }


  export type FollowerAvgAggregateInputType = {
    id?: true
  }

  export type FollowerSumAggregateInputType = {
    id?: true
  }

  export type FollowerMinAggregateInputType = {
    id?: true
    createdAt?: true
    followerId?: true
    followingId?: true
  }

  export type FollowerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    followerId?: true
    followingId?: true
  }

  export type FollowerCountAggregateInputType = {
    id?: true
    createdAt?: true
    followerId?: true
    followingId?: true
    _all?: true
  }

  export type FollowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follower to aggregate.
     */
    where?: followerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned followers
    **/
    _count?: true | FollowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerMaxAggregateInputType
  }

  export type GetFollowerAggregateType<T extends FollowerAggregateArgs> = {
        [P in keyof T & keyof AggregateFollower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollower[P]>
      : GetScalarType<T[P], AggregateFollower[P]>
  }




  export type followerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followerWhereInput
    orderBy?: followerOrderByWithAggregationInput | followerOrderByWithAggregationInput[]
    by: FollowerScalarFieldEnum[] | FollowerScalarFieldEnum
    having?: followerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerCountAggregateInputType | true
    _avg?: FollowerAvgAggregateInputType
    _sum?: FollowerSumAggregateInputType
    _min?: FollowerMinAggregateInputType
    _max?: FollowerMaxAggregateInputType
  }

  export type FollowerGroupByOutputType = {
    id: number
    createdAt: Date
    followerId: string
    followingId: string
    _count: FollowerCountAggregateOutputType | null
    _avg: FollowerAvgAggregateOutputType | null
    _sum: FollowerSumAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  type GetFollowerGroupByPayload<T extends followerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowerGroupByOutputType[P]>
            : GetScalarType<T[P], FollowerGroupByOutputType[P]>
        }
      >
    >


  export type followerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    followerId?: boolean
    followingId?: boolean
    user_follower_followerIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_follower_followingIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follower"]>



  export type followerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    followerId?: boolean
    followingId?: boolean
  }

  export type followerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "followerId" | "followingId", ExtArgs["result"]["follower"]>
  export type followerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_follower_followerIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_follower_followingIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $followerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "follower"
    objects: {
      user_follower_followerIdTouser: Prisma.$userPayload<ExtArgs>
      user_follower_followingIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      followerId: string
      followingId: string
    }, ExtArgs["result"]["follower"]>
    composites: {}
  }

  type followerGetPayload<S extends boolean | null | undefined | followerDefaultArgs> = $Result.GetResult<Prisma.$followerPayload, S>

  type followerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowerCountAggregateInputType | true
    }

  export interface followerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['follower'], meta: { name: 'follower' } }
    /**
     * Find zero or one Follower that matches the filter.
     * @param {followerFindUniqueArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followerFindUniqueArgs>(args: SelectSubset<T, followerFindUniqueArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followerFindUniqueOrThrowArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followerFindUniqueOrThrowArgs>(args: SelectSubset<T, followerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerFindFirstArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followerFindFirstArgs>(args?: SelectSubset<T, followerFindFirstArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerFindFirstOrThrowArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followerFindFirstOrThrowArgs>(args?: SelectSubset<T, followerFindFirstOrThrowArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.follower.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.follower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followerWithIdOnly = await prisma.follower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends followerFindManyArgs>(args?: SelectSubset<T, followerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follower.
     * @param {followerCreateArgs} args - Arguments to create a Follower.
     * @example
     * // Create one Follower
     * const Follower = await prisma.follower.create({
     *   data: {
     *     // ... data to create a Follower
     *   }
     * })
     * 
     */
    create<T extends followerCreateArgs>(args: SelectSubset<T, followerCreateArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followers.
     * @param {followerCreateManyArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const follower = await prisma.follower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followerCreateManyArgs>(args?: SelectSubset<T, followerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follower.
     * @param {followerDeleteArgs} args - Arguments to delete one Follower.
     * @example
     * // Delete one Follower
     * const Follower = await prisma.follower.delete({
     *   where: {
     *     // ... filter to delete one Follower
     *   }
     * })
     * 
     */
    delete<T extends followerDeleteArgs>(args: SelectSubset<T, followerDeleteArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follower.
     * @param {followerUpdateArgs} args - Arguments to update one Follower.
     * @example
     * // Update one Follower
     * const follower = await prisma.follower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followerUpdateArgs>(args: SelectSubset<T, followerUpdateArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followers.
     * @param {followerDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.follower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followerDeleteManyArgs>(args?: SelectSubset<T, followerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const follower = await prisma.follower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followerUpdateManyArgs>(args: SelectSubset<T, followerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follower.
     * @param {followerUpsertArgs} args - Arguments to update or create a Follower.
     * @example
     * // Update or create a Follower
     * const follower = await prisma.follower.upsert({
     *   create: {
     *     // ... data to create a Follower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follower we want to update
     *   }
     * })
     */
    upsert<T extends followerUpsertArgs>(args: SelectSubset<T, followerUpsertArgs<ExtArgs>>): Prisma__followerClient<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.follower.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends followerCountArgs>(
      args?: Subset<T, followerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowerAggregateArgs>(args: Subset<T, FollowerAggregateArgs>): Prisma.PrismaPromise<GetFollowerAggregateType<T>>

    /**
     * Group by Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followerGroupByArgs} args - Group by arguments.
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
      T extends followerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followerGroupByArgs['orderBy'] }
        : { orderBy?: followerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, followerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the follower model
   */
  readonly fields: followerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for follower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_follower_followerIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_follower_followingIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the follower model
   */
  interface followerFieldRefs {
    readonly id: FieldRef<"follower", 'Int'>
    readonly createdAt: FieldRef<"follower", 'DateTime'>
    readonly followerId: FieldRef<"follower", 'String'>
    readonly followingId: FieldRef<"follower", 'String'>
  }
    

  // Custom InputTypes
  /**
   * follower findUnique
   */
  export type followerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter, which follower to fetch.
     */
    where: followerWhereUniqueInput
  }

  /**
   * follower findUniqueOrThrow
   */
  export type followerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter, which follower to fetch.
     */
    where: followerWhereUniqueInput
  }

  /**
   * follower findFirst
   */
  export type followerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter, which follower to fetch.
     */
    where?: followerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * follower findFirstOrThrow
   */
  export type followerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter, which follower to fetch.
     */
    where?: followerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * follower findMany
   */
  export type followerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing followers.
     */
    cursor?: followerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * follower create
   */
  export type followerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * The data needed to create a follower.
     */
    data: XOR<followerCreateInput, followerUncheckedCreateInput>
  }

  /**
   * follower createMany
   */
  export type followerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many followers.
     */
    data: followerCreateManyInput | followerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * follower update
   */
  export type followerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * The data needed to update a follower.
     */
    data: XOR<followerUpdateInput, followerUncheckedUpdateInput>
    /**
     * Choose, which follower to update.
     */
    where: followerWhereUniqueInput
  }

  /**
   * follower updateMany
   */
  export type followerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update followers.
     */
    data: XOR<followerUpdateManyMutationInput, followerUncheckedUpdateManyInput>
    /**
     * Filter which followers to update
     */
    where?: followerWhereInput
    /**
     * Limit how many followers to update.
     */
    limit?: number
  }

  /**
   * follower upsert
   */
  export type followerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * The filter to search for the follower to update in case it exists.
     */
    where: followerWhereUniqueInput
    /**
     * In case the follower found by the `where` argument doesn't exist, create a new follower with this data.
     */
    create: XOR<followerCreateInput, followerUncheckedCreateInput>
    /**
     * In case the follower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followerUpdateInput, followerUncheckedUpdateInput>
  }

  /**
   * follower delete
   */
  export type followerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    /**
     * Filter which follower to delete.
     */
    where: followerWhereUniqueInput
  }

  /**
   * follower deleteMany
   */
  export type followerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followers to delete
     */
    where?: followerWhereInput
    /**
     * Limit how many followers to delete.
     */
    limit?: number
  }

  /**
   * follower without action
   */
  export type followerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
  }


  /**
   * Model followrequest
   */

  export type AggregateFollowrequest = {
    _count: FollowrequestCountAggregateOutputType | null
    _avg: FollowrequestAvgAggregateOutputType | null
    _sum: FollowrequestSumAggregateOutputType | null
    _min: FollowrequestMinAggregateOutputType | null
    _max: FollowrequestMaxAggregateOutputType | null
  }

  export type FollowrequestAvgAggregateOutputType = {
    id: number | null
  }

  export type FollowrequestSumAggregateOutputType = {
    id: number | null
  }

  export type FollowrequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type FollowrequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type FollowrequestCountAggregateOutputType = {
    id: number
    createdAt: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type FollowrequestAvgAggregateInputType = {
    id?: true
  }

  export type FollowrequestSumAggregateInputType = {
    id?: true
  }

  export type FollowrequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type FollowrequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type FollowrequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type FollowrequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followrequest to aggregate.
     */
    where?: followrequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followrequests to fetch.
     */
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followrequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned followrequests
    **/
    _count?: true | FollowrequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowrequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowrequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowrequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowrequestMaxAggregateInputType
  }

  export type GetFollowrequestAggregateType<T extends FollowrequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowrequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowrequest[P]>
      : GetScalarType<T[P], AggregateFollowrequest[P]>
  }




  export type followrequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followrequestWhereInput
    orderBy?: followrequestOrderByWithAggregationInput | followrequestOrderByWithAggregationInput[]
    by: FollowrequestScalarFieldEnum[] | FollowrequestScalarFieldEnum
    having?: followrequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowrequestCountAggregateInputType | true
    _avg?: FollowrequestAvgAggregateInputType
    _sum?: FollowrequestSumAggregateInputType
    _min?: FollowrequestMinAggregateInputType
    _max?: FollowrequestMaxAggregateInputType
  }

  export type FollowrequestGroupByOutputType = {
    id: number
    createdAt: Date
    senderId: string
    receiverId: string
    _count: FollowrequestCountAggregateOutputType | null
    _avg: FollowrequestAvgAggregateOutputType | null
    _sum: FollowrequestSumAggregateOutputType | null
    _min: FollowrequestMinAggregateOutputType | null
    _max: FollowrequestMaxAggregateOutputType | null
  }

  type GetFollowrequestGroupByPayload<T extends followrequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowrequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowrequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowrequestGroupByOutputType[P]>
            : GetScalarType<T[P], FollowrequestGroupByOutputType[P]>
        }
      >
    >


  export type followrequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    user_followrequest_receiverIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_followrequest_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followrequest"]>



  export type followrequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type followrequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "senderId" | "receiverId", ExtArgs["result"]["followrequest"]>
  export type followrequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_followrequest_receiverIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_followrequest_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $followrequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "followrequest"
    objects: {
      user_followrequest_receiverIdTouser: Prisma.$userPayload<ExtArgs>
      user_followrequest_senderIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      senderId: string
      receiverId: string
    }, ExtArgs["result"]["followrequest"]>
    composites: {}
  }

  type followrequestGetPayload<S extends boolean | null | undefined | followrequestDefaultArgs> = $Result.GetResult<Prisma.$followrequestPayload, S>

  type followrequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followrequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowrequestCountAggregateInputType | true
    }

  export interface followrequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['followrequest'], meta: { name: 'followrequest' } }
    /**
     * Find zero or one Followrequest that matches the filter.
     * @param {followrequestFindUniqueArgs} args - Arguments to find a Followrequest
     * @example
     * // Get one Followrequest
     * const followrequest = await prisma.followrequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followrequestFindUniqueArgs>(args: SelectSubset<T, followrequestFindUniqueArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Followrequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followrequestFindUniqueOrThrowArgs} args - Arguments to find a Followrequest
     * @example
     * // Get one Followrequest
     * const followrequest = await prisma.followrequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followrequestFindUniqueOrThrowArgs>(args: SelectSubset<T, followrequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Followrequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestFindFirstArgs} args - Arguments to find a Followrequest
     * @example
     * // Get one Followrequest
     * const followrequest = await prisma.followrequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followrequestFindFirstArgs>(args?: SelectSubset<T, followrequestFindFirstArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Followrequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestFindFirstOrThrowArgs} args - Arguments to find a Followrequest
     * @example
     * // Get one Followrequest
     * const followrequest = await prisma.followrequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followrequestFindFirstOrThrowArgs>(args?: SelectSubset<T, followrequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followrequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followrequests
     * const followrequests = await prisma.followrequest.findMany()
     * 
     * // Get first 10 Followrequests
     * const followrequests = await prisma.followrequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followrequestWithIdOnly = await prisma.followrequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends followrequestFindManyArgs>(args?: SelectSubset<T, followrequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Followrequest.
     * @param {followrequestCreateArgs} args - Arguments to create a Followrequest.
     * @example
     * // Create one Followrequest
     * const Followrequest = await prisma.followrequest.create({
     *   data: {
     *     // ... data to create a Followrequest
     *   }
     * })
     * 
     */
    create<T extends followrequestCreateArgs>(args: SelectSubset<T, followrequestCreateArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followrequests.
     * @param {followrequestCreateManyArgs} args - Arguments to create many Followrequests.
     * @example
     * // Create many Followrequests
     * const followrequest = await prisma.followrequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followrequestCreateManyArgs>(args?: SelectSubset<T, followrequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Followrequest.
     * @param {followrequestDeleteArgs} args - Arguments to delete one Followrequest.
     * @example
     * // Delete one Followrequest
     * const Followrequest = await prisma.followrequest.delete({
     *   where: {
     *     // ... filter to delete one Followrequest
     *   }
     * })
     * 
     */
    delete<T extends followrequestDeleteArgs>(args: SelectSubset<T, followrequestDeleteArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Followrequest.
     * @param {followrequestUpdateArgs} args - Arguments to update one Followrequest.
     * @example
     * // Update one Followrequest
     * const followrequest = await prisma.followrequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followrequestUpdateArgs>(args: SelectSubset<T, followrequestUpdateArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followrequests.
     * @param {followrequestDeleteManyArgs} args - Arguments to filter Followrequests to delete.
     * @example
     * // Delete a few Followrequests
     * const { count } = await prisma.followrequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followrequestDeleteManyArgs>(args?: SelectSubset<T, followrequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followrequests
     * const followrequest = await prisma.followrequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followrequestUpdateManyArgs>(args: SelectSubset<T, followrequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Followrequest.
     * @param {followrequestUpsertArgs} args - Arguments to update or create a Followrequest.
     * @example
     * // Update or create a Followrequest
     * const followrequest = await prisma.followrequest.upsert({
     *   create: {
     *     // ... data to create a Followrequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followrequest we want to update
     *   }
     * })
     */
    upsert<T extends followrequestUpsertArgs>(args: SelectSubset<T, followrequestUpsertArgs<ExtArgs>>): Prisma__followrequestClient<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestCountArgs} args - Arguments to filter Followrequests to count.
     * @example
     * // Count the number of Followrequests
     * const count = await prisma.followrequest.count({
     *   where: {
     *     // ... the filter for the Followrequests we want to count
     *   }
     * })
    **/
    count<T extends followrequestCountArgs>(
      args?: Subset<T, followrequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowrequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followrequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowrequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowrequestAggregateArgs>(args: Subset<T, FollowrequestAggregateArgs>): Prisma.PrismaPromise<GetFollowrequestAggregateType<T>>

    /**
     * Group by Followrequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followrequestGroupByArgs} args - Group by arguments.
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
      T extends followrequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followrequestGroupByArgs['orderBy'] }
        : { orderBy?: followrequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, followrequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowrequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the followrequest model
   */
  readonly fields: followrequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for followrequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followrequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_followrequest_receiverIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_followrequest_senderIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the followrequest model
   */
  interface followrequestFieldRefs {
    readonly id: FieldRef<"followrequest", 'Int'>
    readonly createdAt: FieldRef<"followrequest", 'DateTime'>
    readonly senderId: FieldRef<"followrequest", 'String'>
    readonly receiverId: FieldRef<"followrequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * followrequest findUnique
   */
  export type followrequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter, which followrequest to fetch.
     */
    where: followrequestWhereUniqueInput
  }

  /**
   * followrequest findUniqueOrThrow
   */
  export type followrequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter, which followrequest to fetch.
     */
    where: followrequestWhereUniqueInput
  }

  /**
   * followrequest findFirst
   */
  export type followrequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter, which followrequest to fetch.
     */
    where?: followrequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followrequests to fetch.
     */
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followrequests.
     */
    cursor?: followrequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followrequests.
     */
    distinct?: FollowrequestScalarFieldEnum | FollowrequestScalarFieldEnum[]
  }

  /**
   * followrequest findFirstOrThrow
   */
  export type followrequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter, which followrequest to fetch.
     */
    where?: followrequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followrequests to fetch.
     */
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followrequests.
     */
    cursor?: followrequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followrequests.
     */
    distinct?: FollowrequestScalarFieldEnum | FollowrequestScalarFieldEnum[]
  }

  /**
   * followrequest findMany
   */
  export type followrequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter, which followrequests to fetch.
     */
    where?: followrequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followrequests to fetch.
     */
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing followrequests.
     */
    cursor?: followrequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followrequests.
     */
    skip?: number
    distinct?: FollowrequestScalarFieldEnum | FollowrequestScalarFieldEnum[]
  }

  /**
   * followrequest create
   */
  export type followrequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * The data needed to create a followrequest.
     */
    data: XOR<followrequestCreateInput, followrequestUncheckedCreateInput>
  }

  /**
   * followrequest createMany
   */
  export type followrequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many followrequests.
     */
    data: followrequestCreateManyInput | followrequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * followrequest update
   */
  export type followrequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * The data needed to update a followrequest.
     */
    data: XOR<followrequestUpdateInput, followrequestUncheckedUpdateInput>
    /**
     * Choose, which followrequest to update.
     */
    where: followrequestWhereUniqueInput
  }

  /**
   * followrequest updateMany
   */
  export type followrequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update followrequests.
     */
    data: XOR<followrequestUpdateManyMutationInput, followrequestUncheckedUpdateManyInput>
    /**
     * Filter which followrequests to update
     */
    where?: followrequestWhereInput
    /**
     * Limit how many followrequests to update.
     */
    limit?: number
  }

  /**
   * followrequest upsert
   */
  export type followrequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * The filter to search for the followrequest to update in case it exists.
     */
    where: followrequestWhereUniqueInput
    /**
     * In case the followrequest found by the `where` argument doesn't exist, create a new followrequest with this data.
     */
    create: XOR<followrequestCreateInput, followrequestUncheckedCreateInput>
    /**
     * In case the followrequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followrequestUpdateInput, followrequestUncheckedUpdateInput>
  }

  /**
   * followrequest delete
   */
  export type followrequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    /**
     * Filter which followrequest to delete.
     */
    where: followrequestWhereUniqueInput
  }

  /**
   * followrequest deleteMany
   */
  export type followrequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followrequests to delete
     */
    where?: followrequestWhereInput
    /**
     * Limit how many followrequests to delete.
     */
    limit?: number
  }

  /**
   * followrequest without action
   */
  export type followrequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
  }


  /**
   * Model like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    commentId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    postId: number | null
    commentId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
    commentId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: string | null
    postId: number | null
    commentId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    commentId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    postId?: true
    commentId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    postId?: true
    commentId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    commentId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    commentId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    commentId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like to aggregate.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type likeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
    orderBy?: likeOrderByWithAggregationInput | likeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: likeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    createdAt: Date
    userId: string
    postId: number | null
    commentId: number | null
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends likeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type likeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    comment?: boolean | like$commentArgs<ExtArgs>
    post?: boolean | like$postArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type likeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
  }

  export type likeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "postId" | "commentId", ExtArgs["result"]["like"]>
  export type likeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | like$commentArgs<ExtArgs>
    post?: boolean | like$postArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $likePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like"
    objects: {
      comment: Prisma.$commentPayload<ExtArgs> | null
      post: Prisma.$postPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: string
      postId: number | null
      commentId: number | null
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type likeGetPayload<S extends boolean | null | undefined | likeDefaultArgs> = $Result.GetResult<Prisma.$likePayload, S>

  type likeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface likeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like'], meta: { name: 'like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {likeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likeFindUniqueArgs>(args: SelectSubset<T, likeFindUniqueArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likeFindUniqueOrThrowArgs>(args: SelectSubset<T, likeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likeFindFirstArgs>(args?: SelectSubset<T, likeFindFirstArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likeFindFirstOrThrowArgs>(args?: SelectSubset<T, likeFindFirstOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likeFindManyArgs>(args?: SelectSubset<T, likeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {likeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends likeCreateArgs>(args: SelectSubset<T, likeCreateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likeCreateManyArgs>(args?: SelectSubset<T, likeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {likeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends likeDeleteArgs>(args: SelectSubset<T, likeDeleteArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {likeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likeUpdateArgs>(args: SelectSubset<T, likeUpdateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likeDeleteManyArgs>(args?: SelectSubset<T, likeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likeUpdateManyArgs>(args: SelectSubset<T, likeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {likeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends likeUpsertArgs>(args: SelectSubset<T, likeUpsertArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likeCountArgs>(
      args?: Subset<T, likeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeGroupByArgs} args - Group by arguments.
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
      T extends likeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likeGroupByArgs['orderBy'] }
        : { orderBy?: likeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, likeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like model
   */
  readonly fields: likeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends like$commentArgs<ExtArgs> = {}>(args?: Subset<T, like$commentArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends like$postArgs<ExtArgs> = {}>(args?: Subset<T, like$postArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the like model
   */
  interface likeFieldRefs {
    readonly id: FieldRef<"like", 'Int'>
    readonly createdAt: FieldRef<"like", 'DateTime'>
    readonly userId: FieldRef<"like", 'String'>
    readonly postId: FieldRef<"like", 'Int'>
    readonly commentId: FieldRef<"like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * like findUnique
   */
  export type likeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findUniqueOrThrow
   */
  export type likeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findFirst
   */
  export type likeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findFirstOrThrow
   */
  export type likeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findMany
   */
  export type likeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like create
   */
  export type likeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to create a like.
     */
    data: XOR<likeCreateInput, likeUncheckedCreateInput>
  }

  /**
   * like createMany
   */
  export type likeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * like update
   */
  export type likeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to update a like.
     */
    data: XOR<likeUpdateInput, likeUncheckedUpdateInput>
    /**
     * Choose, which like to update.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like updateMany
   */
  export type likeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * like upsert
   */
  export type likeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The filter to search for the like to update in case it exists.
     */
    where: likeWhereUniqueInput
    /**
     * In case the like found by the `where` argument doesn't exist, create a new like with this data.
     */
    create: XOR<likeCreateInput, likeUncheckedCreateInput>
    /**
     * In case the like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likeUpdateInput, likeUncheckedUpdateInput>
  }

  /**
   * like delete
   */
  export type likeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter which like to delete.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like deleteMany
   */
  export type likeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * like.comment
   */
  export type like$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
  }

  /**
   * like.post
   */
  export type like$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
  }

  /**
   * like without action
   */
  export type likeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
  }


  /**
   * Model post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    desc: string | null
    img: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    desc: string | null
    img: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    desc: number
    img: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    desc?: true
    img?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    desc?: true
    img?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    desc?: true
    img?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: postOrderByWithAggregationInput | postOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    desc: string
    img: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    img?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    comment?: boolean | post$commentArgs<ExtArgs>
    like?: boolean | post$likeArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type postSelectScalar = {
    id?: boolean
    desc?: boolean
    img?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type postOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "desc" | "img" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["post"]>
  export type postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | post$commentArgs<ExtArgs>
    like?: boolean | post$likeArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post"
    objects: {
      comment: Prisma.$commentPayload<ExtArgs>[]
      like: Prisma.$likePayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      desc: string
      img: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type postGetPayload<S extends boolean | null | undefined | postDefaultArgs> = $Result.GetResult<Prisma.$postPayload, S>

  type postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post'], meta: { name: 'post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postFindUniqueArgs>(args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs>(args: SelectSubset<T, postFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postFindFirstArgs>(args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postFindFirstOrThrowArgs>(args?: SelectSubset<T, postFindFirstOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postFindManyArgs>(args?: SelectSubset<T, postFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends postCreateArgs>(args: SelectSubset<T, postCreateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postCreateManyArgs>(args?: SelectSubset<T, postCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends postDeleteArgs>(args: SelectSubset<T, postDeleteArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postUpdateArgs>(args: SelectSubset<T, postUpdateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postDeleteManyArgs>(args?: SelectSubset<T, postDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postUpdateManyArgs>(args: SelectSubset<T, postUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends postUpsertArgs>(args: SelectSubset<T, postUpsertArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postGroupByArgs} args - Group by arguments.
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
      T extends postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postGroupByArgs['orderBy'] }
        : { orderBy?: postGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post model
   */
  readonly fields: postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends post$commentArgs<ExtArgs> = {}>(args?: Subset<T, post$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    like<T extends post$likeArgs<ExtArgs> = {}>(args?: Subset<T, post$likeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the post model
   */
  interface postFieldRefs {
    readonly id: FieldRef<"post", 'Int'>
    readonly desc: FieldRef<"post", 'String'>
    readonly img: FieldRef<"post", 'String'>
    readonly createdAt: FieldRef<"post", 'DateTime'>
    readonly updatedAt: FieldRef<"post", 'DateTime'>
    readonly userId: FieldRef<"post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * post findUnique
   */
  export type postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findFirst
   */
  export type postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     */
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }

  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     */
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     */
    where: postWhereUniqueInput
  }

  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     */
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     */
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }

  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     */
    where: postWhereUniqueInput
  }

  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * post.comment
   */
  export type post$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * post.like
   */
  export type post$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * post without action
   */
  export type postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
  }


  /**
   * Model story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    expiresAt: Date | null
    img: string | null
    userId: string | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    expiresAt: Date | null
    img: string | null
    userId: string | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    createdAt: number
    expiresAt: number
    img: number
    userId: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    img?: true
    userId?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    img?: true
    userId?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    img?: true
    userId?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which story to aggregate.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type storyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storyWhereInput
    orderBy?: storyOrderByWithAggregationInput | storyOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: storyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: number
    createdAt: Date
    expiresAt: Date
    img: string
    userId: string
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends storyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type storySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    img?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>



  export type storySelectScalar = {
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    img?: boolean
    userId?: boolean
  }

  export type storyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "expiresAt" | "img" | "userId", ExtArgs["result"]["story"]>
  export type storyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $storyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "story"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      expiresAt: Date
      img: string
      userId: string
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type storyGetPayload<S extends boolean | null | undefined | storyDefaultArgs> = $Result.GetResult<Prisma.$storyPayload, S>

  type storyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface storyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['story'], meta: { name: 'story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {storyFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storyFindUniqueArgs>(args: SelectSubset<T, storyFindUniqueArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storyFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storyFindUniqueOrThrowArgs>(args: SelectSubset<T, storyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storyFindFirstArgs>(args?: SelectSubset<T, storyFindFirstArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storyFindFirstOrThrowArgs>(args?: SelectSubset<T, storyFindFirstOrThrowArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storyFindManyArgs>(args?: SelectSubset<T, storyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {storyCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends storyCreateArgs>(args: SelectSubset<T, storyCreateArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {storyCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storyCreateManyArgs>(args?: SelectSubset<T, storyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Story.
     * @param {storyDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends storyDeleteArgs>(args: SelectSubset<T, storyDeleteArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {storyUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storyUpdateArgs>(args: SelectSubset<T, storyUpdateArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {storyDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storyDeleteManyArgs>(args?: SelectSubset<T, storyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storyUpdateManyArgs>(args: SelectSubset<T, storyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {storyUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends storyUpsertArgs>(args: SelectSubset<T, storyUpsertArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends storyCountArgs>(
      args?: Subset<T, storyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyGroupByArgs} args - Group by arguments.
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
      T extends storyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storyGroupByArgs['orderBy'] }
        : { orderBy?: storyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the story model
   */
  readonly fields: storyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the story model
   */
  interface storyFieldRefs {
    readonly id: FieldRef<"story", 'Int'>
    readonly createdAt: FieldRef<"story", 'DateTime'>
    readonly expiresAt: FieldRef<"story", 'DateTime'>
    readonly img: FieldRef<"story", 'String'>
    readonly userId: FieldRef<"story", 'String'>
  }
    

  // Custom InputTypes
  /**
   * story findUnique
   */
  export type storyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story findUniqueOrThrow
   */
  export type storyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story findFirst
   */
  export type storyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story findFirstOrThrow
   */
  export type storyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story findMany
   */
  export type storyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story create
   */
  export type storyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The data needed to create a story.
     */
    data: XOR<storyCreateInput, storyUncheckedCreateInput>
  }

  /**
   * story createMany
   */
  export type storyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stories.
     */
    data: storyCreateManyInput | storyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * story update
   */
  export type storyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The data needed to update a story.
     */
    data: XOR<storyUpdateInput, storyUncheckedUpdateInput>
    /**
     * Choose, which story to update.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story updateMany
   */
  export type storyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stories.
     */
    data: XOR<storyUpdateManyMutationInput, storyUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storyWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
  }

  /**
   * story upsert
   */
  export type storyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The filter to search for the story to update in case it exists.
     */
    where: storyWhereUniqueInput
    /**
     * In case the story found by the `where` argument doesn't exist, create a new story with this data.
     */
    create: XOR<storyCreateInput, storyUncheckedCreateInput>
    /**
     * In case the story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storyUpdateInput, storyUncheckedUpdateInput>
  }

  /**
   * story delete
   */
  export type storyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter which story to delete.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story deleteMany
   */
  export type storyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to delete
     */
    where?: storyWhereInput
    /**
     * Limit how many stories to delete.
     */
    limit?: number
  }

  /**
   * story without action
   */
  export type storyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    avatar: string | null
    cover: string | null
    name: string | null
    surname: string | null
    description: string | null
    city: string | null
    school: string | null
    work: string | null
    website: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    avatar: string | null
    cover: string | null
    name: string | null
    surname: string | null
    description: string | null
    city: string | null
    school: string | null
    work: string | null
    website: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    avatar: number
    cover: number
    name: number
    surname: number
    description: number
    city: number
    school: number
    work: number
    website: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    cover?: true
    name?: true
    surname?: true
    description?: true
    city?: true
    school?: true
    work?: true
    website?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    cover?: true
    name?: true
    surname?: true
    description?: true
    city?: true
    school?: true
    work?: true
    website?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    cover?: true
    name?: true
    surname?: true
    description?: true
    city?: true
    school?: true
    work?: true
    website?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    avatar: string | null
    cover: string | null
    name: string | null
    surname: string | null
    description: string | null
    city: string | null
    school: string | null
    work: string | null
    website: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatar?: boolean
    cover?: boolean
    name?: boolean
    surname?: boolean
    description?: boolean
    city?: boolean
    school?: boolean
    work?: boolean
    website?: boolean
    createdAt?: boolean
    block_block_blockedIdTouser?: boolean | user$block_block_blockedIdTouserArgs<ExtArgs>
    block_block_blockerIdTouser?: boolean | user$block_block_blockerIdTouserArgs<ExtArgs>
    comment?: boolean | user$commentArgs<ExtArgs>
    follower_follower_followerIdTouser?: boolean | user$follower_follower_followerIdTouserArgs<ExtArgs>
    follower_follower_followingIdTouser?: boolean | user$follower_follower_followingIdTouserArgs<ExtArgs>
    followrequest_followrequest_receiverIdTouser?: boolean | user$followrequest_followrequest_receiverIdTouserArgs<ExtArgs>
    followrequest_followrequest_senderIdTouser?: boolean | user$followrequest_followrequest_senderIdTouserArgs<ExtArgs>
    like?: boolean | user$likeArgs<ExtArgs>
    post?: boolean | user$postArgs<ExtArgs>
    story?: boolean | user$storyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    avatar?: boolean
    cover?: boolean
    name?: boolean
    surname?: boolean
    description?: boolean
    city?: boolean
    school?: boolean
    work?: boolean
    website?: boolean
    createdAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "avatar" | "cover" | "name" | "surname" | "description" | "city" | "school" | "work" | "website" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block_block_blockedIdTouser?: boolean | user$block_block_blockedIdTouserArgs<ExtArgs>
    block_block_blockerIdTouser?: boolean | user$block_block_blockerIdTouserArgs<ExtArgs>
    comment?: boolean | user$commentArgs<ExtArgs>
    follower_follower_followerIdTouser?: boolean | user$follower_follower_followerIdTouserArgs<ExtArgs>
    follower_follower_followingIdTouser?: boolean | user$follower_follower_followingIdTouserArgs<ExtArgs>
    followrequest_followrequest_receiverIdTouser?: boolean | user$followrequest_followrequest_receiverIdTouserArgs<ExtArgs>
    followrequest_followrequest_senderIdTouser?: boolean | user$followrequest_followrequest_senderIdTouserArgs<ExtArgs>
    like?: boolean | user$likeArgs<ExtArgs>
    post?: boolean | user$postArgs<ExtArgs>
    story?: boolean | user$storyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      block_block_blockedIdTouser: Prisma.$blockPayload<ExtArgs>[]
      block_block_blockerIdTouser: Prisma.$blockPayload<ExtArgs>[]
      comment: Prisma.$commentPayload<ExtArgs>[]
      follower_follower_followerIdTouser: Prisma.$followerPayload<ExtArgs>[]
      follower_follower_followingIdTouser: Prisma.$followerPayload<ExtArgs>[]
      followrequest_followrequest_receiverIdTouser: Prisma.$followrequestPayload<ExtArgs>[]
      followrequest_followrequest_senderIdTouser: Prisma.$followrequestPayload<ExtArgs>[]
      like: Prisma.$likePayload<ExtArgs>[]
      post: Prisma.$postPayload<ExtArgs>[]
      story: Prisma.$storyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      avatar: string | null
      cover: string | null
      name: string | null
      surname: string | null
      description: string | null
      city: string | null
      school: string | null
      work: string | null
      website: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block_block_blockedIdTouser<T extends user$block_block_blockedIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$block_block_blockedIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    block_block_blockerIdTouser<T extends user$block_block_blockerIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$block_block_blockerIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comment<T extends user$commentArgs<ExtArgs> = {}>(args?: Subset<T, user$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follower_follower_followerIdTouser<T extends user$follower_follower_followerIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$follower_follower_followerIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follower_follower_followingIdTouser<T extends user$follower_follower_followingIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$follower_follower_followingIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followrequest_followrequest_receiverIdTouser<T extends user$followrequest_followrequest_receiverIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$followrequest_followrequest_receiverIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followrequest_followrequest_senderIdTouser<T extends user$followrequest_followrequest_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$followrequest_followrequest_senderIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followrequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    like<T extends user$likeArgs<ExtArgs> = {}>(args?: Subset<T, user$likeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post<T extends user$postArgs<ExtArgs> = {}>(args?: Subset<T, user$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    story<T extends user$storyArgs<ExtArgs> = {}>(args?: Subset<T, user$storyArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly cover: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly surname: FieldRef<"user", 'String'>
    readonly description: FieldRef<"user", 'String'>
    readonly city: FieldRef<"user", 'String'>
    readonly school: FieldRef<"user", 'String'>
    readonly work: FieldRef<"user", 'String'>
    readonly website: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.block_block_blockedIdTouser
   */
  export type user$block_block_blockedIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    where?: blockWhereInput
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    cursor?: blockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * user.block_block_blockerIdTouser
   */
  export type user$block_block_blockerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the block
     */
    select?: blockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the block
     */
    omit?: blockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockInclude<ExtArgs> | null
    where?: blockWhereInput
    orderBy?: blockOrderByWithRelationInput | blockOrderByWithRelationInput[]
    cursor?: blockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * user.comment
   */
  export type user$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * user.follower_follower_followerIdTouser
   */
  export type user$follower_follower_followerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    where?: followerWhereInput
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    cursor?: followerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * user.follower_follower_followingIdTouser
   */
  export type user$follower_follower_followingIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follower
     */
    select?: followerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follower
     */
    omit?: followerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followerInclude<ExtArgs> | null
    where?: followerWhereInput
    orderBy?: followerOrderByWithRelationInput | followerOrderByWithRelationInput[]
    cursor?: followerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * user.followrequest_followrequest_receiverIdTouser
   */
  export type user$followrequest_followrequest_receiverIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    where?: followrequestWhereInput
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    cursor?: followrequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowrequestScalarFieldEnum | FollowrequestScalarFieldEnum[]
  }

  /**
   * user.followrequest_followrequest_senderIdTouser
   */
  export type user$followrequest_followrequest_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followrequest
     */
    select?: followrequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the followrequest
     */
    omit?: followrequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followrequestInclude<ExtArgs> | null
    where?: followrequestWhereInput
    orderBy?: followrequestOrderByWithRelationInput | followrequestOrderByWithRelationInput[]
    cursor?: followrequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowrequestScalarFieldEnum | FollowrequestScalarFieldEnum[]
  }

  /**
   * user.like
   */
  export type user$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * user.post
   */
  export type user$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * user.story
   */
  export type user$storyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    where?: storyWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const BlockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    blockerId: 'blockerId',
    blockedId: 'blockedId'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FollowerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    followerId: 'followerId',
    followingId: 'followingId'
  };

  export type FollowerScalarFieldEnum = (typeof FollowerScalarFieldEnum)[keyof typeof FollowerScalarFieldEnum]


  export const FollowrequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type FollowrequestScalarFieldEnum = (typeof FollowrequestScalarFieldEnum)[keyof typeof FollowrequestScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId',
    commentId: 'commentId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    img: 'img',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    img: 'img',
    userId: 'userId'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    avatar: 'avatar',
    cover: 'cover',
    name: 'name',
    surname: 'surname',
    description: 'description',
    city: 'city',
    school: 'school',
    work: 'work',
    website: 'website',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const blockOrderByRelevanceFieldEnum: {
    blockerId: 'blockerId',
    blockedId: 'blockedId'
  };

  export type blockOrderByRelevanceFieldEnum = (typeof blockOrderByRelevanceFieldEnum)[keyof typeof blockOrderByRelevanceFieldEnum]


  export const commentOrderByRelevanceFieldEnum: {
    desc: 'desc',
    userId: 'userId'
  };

  export type commentOrderByRelevanceFieldEnum = (typeof commentOrderByRelevanceFieldEnum)[keyof typeof commentOrderByRelevanceFieldEnum]


  export const followerOrderByRelevanceFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId'
  };

  export type followerOrderByRelevanceFieldEnum = (typeof followerOrderByRelevanceFieldEnum)[keyof typeof followerOrderByRelevanceFieldEnum]


  export const followrequestOrderByRelevanceFieldEnum: {
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type followrequestOrderByRelevanceFieldEnum = (typeof followrequestOrderByRelevanceFieldEnum)[keyof typeof followrequestOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const likeOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type likeOrderByRelevanceFieldEnum = (typeof likeOrderByRelevanceFieldEnum)[keyof typeof likeOrderByRelevanceFieldEnum]


  export const postOrderByRelevanceFieldEnum: {
    desc: 'desc',
    img: 'img',
    userId: 'userId'
  };

  export type postOrderByRelevanceFieldEnum = (typeof postOrderByRelevanceFieldEnum)[keyof typeof postOrderByRelevanceFieldEnum]


  export const storyOrderByRelevanceFieldEnum: {
    img: 'img',
    userId: 'userId'
  };

  export type storyOrderByRelevanceFieldEnum = (typeof storyOrderByRelevanceFieldEnum)[keyof typeof storyOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    avatar: 'avatar',
    cover: 'cover',
    name: 'name',
    surname: 'surname',
    description: 'description',
    city: 'city',
    school: 'school',
    work: 'work',
    website: 'website'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type blockWhereInput = {
    AND?: blockWhereInput | blockWhereInput[]
    OR?: blockWhereInput[]
    NOT?: blockWhereInput | blockWhereInput[]
    id?: IntFilter<"block"> | number
    createdAt?: DateTimeFilter<"block"> | Date | string
    blockerId?: StringFilter<"block"> | string
    blockedId?: StringFilter<"block"> | string
    user_block_blockedIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_block_blockerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type blockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    user_block_blockedIdTouser?: userOrderByWithRelationInput
    user_block_blockerIdTouser?: userOrderByWithRelationInput
    _relevance?: blockOrderByRelevanceInput
  }

  export type blockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blockerId_blockedId?: blockBlockerIdBlockedIdCompoundUniqueInput
    AND?: blockWhereInput | blockWhereInput[]
    OR?: blockWhereInput[]
    NOT?: blockWhereInput | blockWhereInput[]
    createdAt?: DateTimeFilter<"block"> | Date | string
    blockerId?: StringFilter<"block"> | string
    blockedId?: StringFilter<"block"> | string
    user_block_blockedIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_block_blockerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "blockerId_blockedId">

  export type blockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    _count?: blockCountOrderByAggregateInput
    _avg?: blockAvgOrderByAggregateInput
    _max?: blockMaxOrderByAggregateInput
    _min?: blockMinOrderByAggregateInput
    _sum?: blockSumOrderByAggregateInput
  }

  export type blockScalarWhereWithAggregatesInput = {
    AND?: blockScalarWhereWithAggregatesInput | blockScalarWhereWithAggregatesInput[]
    OR?: blockScalarWhereWithAggregatesInput[]
    NOT?: blockScalarWhereWithAggregatesInput | blockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"block"> | number
    createdAt?: DateTimeWithAggregatesFilter<"block"> | Date | string
    blockerId?: StringWithAggregatesFilter<"block"> | string
    blockedId?: StringWithAggregatesFilter<"block"> | string
  }

  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: IntFilter<"comment"> | number
    desc?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
    userId?: StringFilter<"comment"> | string
    postId?: IntFilter<"comment"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    like?: LikeListRelationFilter
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    like?: likeOrderByRelationAggregateInput
    _relevance?: commentOrderByRelevanceInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    desc?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
    userId?: StringFilter<"comment"> | string
    postId?: IntFilter<"comment"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    like?: LikeListRelationFilter
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _avg?: commentAvgOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
    _sum?: commentSumOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comment"> | number
    desc?: StringWithAggregatesFilter<"comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    userId?: StringWithAggregatesFilter<"comment"> | string
    postId?: IntWithAggregatesFilter<"comment"> | number
  }

  export type followerWhereInput = {
    AND?: followerWhereInput | followerWhereInput[]
    OR?: followerWhereInput[]
    NOT?: followerWhereInput | followerWhereInput[]
    id?: IntFilter<"follower"> | number
    createdAt?: DateTimeFilter<"follower"> | Date | string
    followerId?: StringFilter<"follower"> | string
    followingId?: StringFilter<"follower"> | string
    user_follower_followerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_follower_followingIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type followerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    user_follower_followerIdTouser?: userOrderByWithRelationInput
    user_follower_followingIdTouser?: userOrderByWithRelationInput
    _relevance?: followerOrderByRelevanceInput
  }

  export type followerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: followerWhereInput | followerWhereInput[]
    OR?: followerWhereInput[]
    NOT?: followerWhereInput | followerWhereInput[]
    createdAt?: DateTimeFilter<"follower"> | Date | string
    followerId?: StringFilter<"follower"> | string
    followingId?: StringFilter<"follower"> | string
    user_follower_followerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_follower_followingIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type followerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    _count?: followerCountOrderByAggregateInput
    _avg?: followerAvgOrderByAggregateInput
    _max?: followerMaxOrderByAggregateInput
    _min?: followerMinOrderByAggregateInput
    _sum?: followerSumOrderByAggregateInput
  }

  export type followerScalarWhereWithAggregatesInput = {
    AND?: followerScalarWhereWithAggregatesInput | followerScalarWhereWithAggregatesInput[]
    OR?: followerScalarWhereWithAggregatesInput[]
    NOT?: followerScalarWhereWithAggregatesInput | followerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"follower"> | number
    createdAt?: DateTimeWithAggregatesFilter<"follower"> | Date | string
    followerId?: StringWithAggregatesFilter<"follower"> | string
    followingId?: StringWithAggregatesFilter<"follower"> | string
  }

  export type followrequestWhereInput = {
    AND?: followrequestWhereInput | followrequestWhereInput[]
    OR?: followrequestWhereInput[]
    NOT?: followrequestWhereInput | followrequestWhereInput[]
    id?: IntFilter<"followrequest"> | number
    createdAt?: DateTimeFilter<"followrequest"> | Date | string
    senderId?: StringFilter<"followrequest"> | string
    receiverId?: StringFilter<"followrequest"> | string
    user_followrequest_receiverIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_followrequest_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type followrequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    user_followrequest_receiverIdTouser?: userOrderByWithRelationInput
    user_followrequest_senderIdTouser?: userOrderByWithRelationInput
    _relevance?: followrequestOrderByRelevanceInput
  }

  export type followrequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    senderId_receiverId?: followrequestSenderIdReceiverIdCompoundUniqueInput
    AND?: followrequestWhereInput | followrequestWhereInput[]
    OR?: followrequestWhereInput[]
    NOT?: followrequestWhereInput | followrequestWhereInput[]
    createdAt?: DateTimeFilter<"followrequest"> | Date | string
    senderId?: StringFilter<"followrequest"> | string
    receiverId?: StringFilter<"followrequest"> | string
    user_followrequest_receiverIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_followrequest_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "senderId_receiverId">

  export type followrequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: followrequestCountOrderByAggregateInput
    _avg?: followrequestAvgOrderByAggregateInput
    _max?: followrequestMaxOrderByAggregateInput
    _min?: followrequestMinOrderByAggregateInput
    _sum?: followrequestSumOrderByAggregateInput
  }

  export type followrequestScalarWhereWithAggregatesInput = {
    AND?: followrequestScalarWhereWithAggregatesInput | followrequestScalarWhereWithAggregatesInput[]
    OR?: followrequestScalarWhereWithAggregatesInput[]
    NOT?: followrequestScalarWhereWithAggregatesInput | followrequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"followrequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"followrequest"> | Date | string
    senderId?: StringWithAggregatesFilter<"followrequest"> | string
    receiverId?: StringWithAggregatesFilter<"followrequest"> | string
  }

  export type likeWhereInput = {
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    id?: IntFilter<"like"> | number
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: StringFilter<"like"> | string
    postId?: IntNullableFilter<"like"> | number | null
    commentId?: IntNullableFilter<"like"> | number | null
    comment?: XOR<CommentNullableScalarRelationFilter, commentWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, postWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type likeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    comment?: commentOrderByWithRelationInput
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: likeOrderByRelevanceInput
  }

  export type likeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: StringFilter<"like"> | string
    postId?: IntNullableFilter<"like"> | number | null
    commentId?: IntNullableFilter<"like"> | number | null
    comment?: XOR<CommentNullableScalarRelationFilter, commentWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, postWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type likeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    _count?: likeCountOrderByAggregateInput
    _avg?: likeAvgOrderByAggregateInput
    _max?: likeMaxOrderByAggregateInput
    _min?: likeMinOrderByAggregateInput
    _sum?: likeSumOrderByAggregateInput
  }

  export type likeScalarWhereWithAggregatesInput = {
    AND?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    OR?: likeScalarWhereWithAggregatesInput[]
    NOT?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"like"> | number
    createdAt?: DateTimeWithAggregatesFilter<"like"> | Date | string
    userId?: StringWithAggregatesFilter<"like"> | string
    postId?: IntNullableWithAggregatesFilter<"like"> | number | null
    commentId?: IntNullableWithAggregatesFilter<"like"> | number | null
  }

  export type postWhereInput = {
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    id?: IntFilter<"post"> | number
    desc?: StringFilter<"post"> | string
    img?: StringNullableFilter<"post"> | string | null
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    userId?: StringFilter<"post"> | string
    comment?: CommentListRelationFilter
    like?: LikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type postOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrder
    img?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    comment?: commentOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    _relevance?: postOrderByRelevanceInput
  }

  export type postWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    desc?: StringFilter<"post"> | string
    img?: StringNullableFilter<"post"> | string | null
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    userId?: StringFilter<"post"> | string
    comment?: CommentListRelationFilter
    like?: LikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type postOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrder
    img?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: postCountOrderByAggregateInput
    _avg?: postAvgOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
    _sum?: postSumOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    OR?: postScalarWhereWithAggregatesInput[]
    NOT?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"post"> | number
    desc?: StringWithAggregatesFilter<"post"> | string
    img?: StringNullableWithAggregatesFilter<"post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"post"> | Date | string
    userId?: StringWithAggregatesFilter<"post"> | string
  }

  export type storyWhereInput = {
    AND?: storyWhereInput | storyWhereInput[]
    OR?: storyWhereInput[]
    NOT?: storyWhereInput | storyWhereInput[]
    id?: IntFilter<"story"> | number
    createdAt?: DateTimeFilter<"story"> | Date | string
    expiresAt?: DateTimeFilter<"story"> | Date | string
    img?: StringFilter<"story"> | string
    userId?: StringFilter<"story"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type storyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    img?: SortOrder
    userId?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: storyOrderByRelevanceInput
  }

  export type storyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: storyWhereInput | storyWhereInput[]
    OR?: storyWhereInput[]
    NOT?: storyWhereInput | storyWhereInput[]
    createdAt?: DateTimeFilter<"story"> | Date | string
    expiresAt?: DateTimeFilter<"story"> | Date | string
    img?: StringFilter<"story"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type storyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    img?: SortOrder
    userId?: SortOrder
    _count?: storyCountOrderByAggregateInput
    _avg?: storyAvgOrderByAggregateInput
    _max?: storyMaxOrderByAggregateInput
    _min?: storyMinOrderByAggregateInput
    _sum?: storySumOrderByAggregateInput
  }

  export type storyScalarWhereWithAggregatesInput = {
    AND?: storyScalarWhereWithAggregatesInput | storyScalarWhereWithAggregatesInput[]
    OR?: storyScalarWhereWithAggregatesInput[]
    NOT?: storyScalarWhereWithAggregatesInput | storyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"story"> | number
    createdAt?: DateTimeWithAggregatesFilter<"story"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"story"> | Date | string
    img?: StringWithAggregatesFilter<"story"> | string
    userId?: StringWithAggregatesFilter<"story"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    cover?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    surname?: StringNullableFilter<"user"> | string | null
    description?: StringNullableFilter<"user"> | string | null
    city?: StringNullableFilter<"user"> | string | null
    school?: StringNullableFilter<"user"> | string | null
    work?: StringNullableFilter<"user"> | string | null
    website?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    block_block_blockedIdTouser?: BlockListRelationFilter
    block_block_blockerIdTouser?: BlockListRelationFilter
    comment?: CommentListRelationFilter
    follower_follower_followerIdTouser?: FollowerListRelationFilter
    follower_follower_followingIdTouser?: FollowerListRelationFilter
    followrequest_followrequest_receiverIdTouser?: FollowrequestListRelationFilter
    followrequest_followrequest_senderIdTouser?: FollowrequestListRelationFilter
    like?: LikeListRelationFilter
    post?: PostListRelationFilter
    story?: XOR<StoryNullableScalarRelationFilter, storyWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    block_block_blockedIdTouser?: blockOrderByRelationAggregateInput
    block_block_blockerIdTouser?: blockOrderByRelationAggregateInput
    comment?: commentOrderByRelationAggregateInput
    follower_follower_followerIdTouser?: followerOrderByRelationAggregateInput
    follower_follower_followingIdTouser?: followerOrderByRelationAggregateInput
    followrequest_followrequest_receiverIdTouser?: followrequestOrderByRelationAggregateInput
    followrequest_followrequest_senderIdTouser?: followrequestOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
    post?: postOrderByRelationAggregateInput
    story?: storyOrderByWithRelationInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    avatar?: StringNullableFilter<"user"> | string | null
    cover?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    surname?: StringNullableFilter<"user"> | string | null
    description?: StringNullableFilter<"user"> | string | null
    city?: StringNullableFilter<"user"> | string | null
    school?: StringNullableFilter<"user"> | string | null
    work?: StringNullableFilter<"user"> | string | null
    website?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    block_block_blockedIdTouser?: BlockListRelationFilter
    block_block_blockerIdTouser?: BlockListRelationFilter
    comment?: CommentListRelationFilter
    follower_follower_followerIdTouser?: FollowerListRelationFilter
    follower_follower_followingIdTouser?: FollowerListRelationFilter
    followrequest_followrequest_receiverIdTouser?: FollowrequestListRelationFilter
    followrequest_followrequest_senderIdTouser?: FollowrequestListRelationFilter
    like?: LikeListRelationFilter
    post?: PostListRelationFilter
    story?: XOR<StoryNullableScalarRelationFilter, storyWhereInput> | null
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    cover?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    surname?: StringNullableWithAggregatesFilter<"user"> | string | null
    description?: StringNullableWithAggregatesFilter<"user"> | string | null
    city?: StringNullableWithAggregatesFilter<"user"> | string | null
    school?: StringNullableWithAggregatesFilter<"user"> | string | null
    work?: StringNullableWithAggregatesFilter<"user"> | string | null
    website?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type blockCreateInput = {
    createdAt?: Date | string
    user_block_blockedIdTouser: userCreateNestedOneWithoutBlock_block_blockedIdTouserInput
    user_block_blockerIdTouser: userCreateNestedOneWithoutBlock_block_blockerIdTouserInput
  }

  export type blockUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    blockerId: string
    blockedId: string
  }

  export type blockUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_block_blockedIdTouser?: userUpdateOneRequiredWithoutBlock_block_blockedIdTouserNestedInput
    user_block_blockerIdTouser?: userUpdateOneRequiredWithoutBlock_block_blockerIdTouserNestedInput
  }

  export type blockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type blockCreateManyInput = {
    id?: number
    createdAt?: Date | string
    blockerId: string
    blockedId: string
  }

  export type blockUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateInput = {
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
    like?: likeCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    postId: number
    like?: likeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentUpdateInput = {
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
    like?: likeUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    like?: likeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentCreateManyInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    postId: number
  }

  export type commentUpdateManyMutationInput = {
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type followerCreateInput = {
    createdAt?: Date | string
    user_follower_followerIdTouser: userCreateNestedOneWithoutFollower_follower_followerIdTouserInput
    user_follower_followingIdTouser: userCreateNestedOneWithoutFollower_follower_followingIdTouserInput
  }

  export type followerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    followerId: string
    followingId: string
  }

  export type followerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follower_followerIdTouser?: userUpdateOneRequiredWithoutFollower_follower_followerIdTouserNestedInput
    user_follower_followingIdTouser?: userUpdateOneRequiredWithoutFollower_follower_followingIdTouserNestedInput
  }

  export type followerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type followerCreateManyInput = {
    id?: number
    createdAt?: Date | string
    followerId: string
    followingId: string
  }

  export type followerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestCreateInput = {
    createdAt?: Date | string
    user_followrequest_receiverIdTouser: userCreateNestedOneWithoutFollowrequest_followrequest_receiverIdTouserInput
    user_followrequest_senderIdTouser: userCreateNestedOneWithoutFollowrequest_followrequest_senderIdTouserInput
  }

  export type followrequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type followrequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_followrequest_receiverIdTouser?: userUpdateOneRequiredWithoutFollowrequest_followrequest_receiverIdTouserNestedInput
    user_followrequest_senderIdTouser?: userUpdateOneRequiredWithoutFollowrequest_followrequest_senderIdTouserNestedInput
  }

  export type followrequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestCreateManyInput = {
    id?: number
    createdAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type followrequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followrequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type likeCreateInput = {
    createdAt?: Date | string
    comment?: commentCreateNestedOneWithoutLikeInput
    post?: postCreateNestedOneWithoutLikeInput
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId?: number | null
    commentId?: number | null
  }

  export type likeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutLikeNestedInput
    post?: postUpdateOneWithoutLikeNestedInput
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId?: number | null
    commentId?: number | null
  }

  export type likeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postCreateInput = {
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    user: userCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postUpdateInput = {
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    user?: userUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postCreateManyInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
  }

  export type postUpdateManyMutationInput = {
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type storyCreateInput = {
    createdAt?: Date | string
    expiresAt: Date | string
    img: string
    user: userCreateNestedOneWithoutStoryInput
  }

  export type storyUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    expiresAt: Date | string
    img: string
    userId: string
  }

  export type storyUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutStoryNestedInput
  }

  export type storyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type storyCreateManyInput = {
    id?: number
    createdAt?: Date | string
    expiresAt: Date | string
    img: string
    userId: string
  }

  export type storyUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type storyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type blockOrderByRelevanceInput = {
    fields: blockOrderByRelevanceFieldEnum | blockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blockBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: string
    blockedId: string
  }

  export type blockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type blockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type blockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type blockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type blockSumOrderByAggregateInput = {
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

  export type PostScalarRelationFilter = {
    is?: postWhereInput
    isNot?: postWhereInput
  }

  export type LikeListRelationFilter = {
    every?: likeWhereInput
    some?: likeWhereInput
    none?: likeWhereInput
  }

  export type likeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentOrderByRelevanceInput = {
    fields: commentOrderByRelevanceFieldEnum | commentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type followerOrderByRelevanceInput = {
    fields: followerOrderByRelevanceFieldEnum | followerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type followerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type followerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type followerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type followerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type followerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type followrequestOrderByRelevanceInput = {
    fields: followrequestOrderByRelevanceFieldEnum | followrequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type followrequestSenderIdReceiverIdCompoundUniqueInput = {
    senderId: string
    receiverId: string
  }

  export type followrequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type followrequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type followrequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type followrequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type followrequestSumOrderByAggregateInput = {
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

  export type CommentNullableScalarRelationFilter = {
    is?: commentWhereInput | null
    isNot?: commentWhereInput | null
  }

  export type PostNullableScalarRelationFilter = {
    is?: postWhereInput | null
    isNot?: postWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type likeOrderByRelevanceInput = {
    fields: likeOrderByRelevanceFieldEnum | likeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type likeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type likeAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type likeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type likeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type likeSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
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

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postOrderByRelevanceInput = {
    fields: postOrderByRelevanceFieldEnum | postOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type postCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    img?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type postAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    img?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    img?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type postSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type storyOrderByRelevanceInput = {
    fields: storyOrderByRelevanceFieldEnum | storyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type storyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    img?: SortOrder
    userId?: SortOrder
  }

  export type storyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    img?: SortOrder
    userId?: SortOrder
  }

  export type storyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    img?: SortOrder
    userId?: SortOrder
  }

  export type storySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockListRelationFilter = {
    every?: blockWhereInput
    some?: blockWhereInput
    none?: blockWhereInput
  }

  export type FollowerListRelationFilter = {
    every?: followerWhereInput
    some?: followerWhereInput
    none?: followerWhereInput
  }

  export type FollowrequestListRelationFilter = {
    every?: followrequestWhereInput
    some?: followrequestWhereInput
    none?: followrequestWhereInput
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type StoryNullableScalarRelationFilter = {
    is?: storyWhereInput | null
    isNot?: storyWhereInput | null
  }

  export type blockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type followerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type followrequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    description?: SortOrder
    city?: SortOrder
    school?: SortOrder
    work?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    description?: SortOrder
    city?: SortOrder
    school?: SortOrder
    work?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    description?: SortOrder
    city?: SortOrder
    school?: SortOrder
    work?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type userCreateNestedOneWithoutBlock_block_blockedIdTouserInput = {
    create?: XOR<userCreateWithoutBlock_block_blockedIdTouserInput, userUncheckedCreateWithoutBlock_block_blockedIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutBlock_block_blockedIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutBlock_block_blockerIdTouserInput = {
    create?: XOR<userCreateWithoutBlock_block_blockerIdTouserInput, userUncheckedCreateWithoutBlock_block_blockerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutBlock_block_blockerIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutBlock_block_blockedIdTouserNestedInput = {
    create?: XOR<userCreateWithoutBlock_block_blockedIdTouserInput, userUncheckedCreateWithoutBlock_block_blockedIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutBlock_block_blockedIdTouserInput
    upsert?: userUpsertWithoutBlock_block_blockedIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBlock_block_blockedIdTouserInput, userUpdateWithoutBlock_block_blockedIdTouserInput>, userUncheckedUpdateWithoutBlock_block_blockedIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutBlock_block_blockerIdTouserNestedInput = {
    create?: XOR<userCreateWithoutBlock_block_blockerIdTouserInput, userUncheckedCreateWithoutBlock_block_blockerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutBlock_block_blockerIdTouserInput
    upsert?: userUpsertWithoutBlock_block_blockerIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBlock_block_blockerIdTouserInput, userUpdateWithoutBlock_block_blockerIdTouserInput>, userUncheckedUpdateWithoutBlock_block_blockerIdTouserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type postCreateNestedOneWithoutCommentInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCommentInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    connect?: userWhereUniqueInput
  }

  export type likeCreateNestedManyWithoutCommentInput = {
    create?: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput> | likeCreateWithoutCommentInput[] | likeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: likeCreateOrConnectWithoutCommentInput | likeCreateOrConnectWithoutCommentInput[]
    createMany?: likeCreateManyCommentInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput> | likeCreateWithoutCommentInput[] | likeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: likeCreateOrConnectWithoutCommentInput | likeCreateOrConnectWithoutCommentInput[]
    createMany?: likeCreateManyCommentInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type postUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    upsert?: postUpsertWithoutCommentInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutCommentInput, postUpdateWithoutCommentInput>, postUncheckedUpdateWithoutCommentInput>
  }

  export type userUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    upsert?: userUpsertWithoutCommentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCommentInput, userUpdateWithoutCommentInput>, userUncheckedUpdateWithoutCommentInput>
  }

  export type likeUpdateManyWithoutCommentNestedInput = {
    create?: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput> | likeCreateWithoutCommentInput[] | likeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: likeCreateOrConnectWithoutCommentInput | likeCreateOrConnectWithoutCommentInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutCommentInput | likeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: likeCreateManyCommentInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutCommentInput | likeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: likeUpdateManyWithWhereWithoutCommentInput | likeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput> | likeCreateWithoutCommentInput[] | likeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: likeCreateOrConnectWithoutCommentInput | likeCreateOrConnectWithoutCommentInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutCommentInput | likeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: likeCreateManyCommentInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutCommentInput | likeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: likeUpdateManyWithWhereWithoutCommentInput | likeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutFollower_follower_followerIdTouserInput = {
    create?: XOR<userCreateWithoutFollower_follower_followerIdTouserInput, userUncheckedCreateWithoutFollower_follower_followerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollower_follower_followerIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFollower_follower_followingIdTouserInput = {
    create?: XOR<userCreateWithoutFollower_follower_followingIdTouserInput, userUncheckedCreateWithoutFollower_follower_followingIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollower_follower_followingIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFollower_follower_followerIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollower_follower_followerIdTouserInput, userUncheckedCreateWithoutFollower_follower_followerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollower_follower_followerIdTouserInput
    upsert?: userUpsertWithoutFollower_follower_followerIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollower_follower_followerIdTouserInput, userUpdateWithoutFollower_follower_followerIdTouserInput>, userUncheckedUpdateWithoutFollower_follower_followerIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutFollower_follower_followingIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollower_follower_followingIdTouserInput, userUncheckedCreateWithoutFollower_follower_followingIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollower_follower_followingIdTouserInput
    upsert?: userUpsertWithoutFollower_follower_followingIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollower_follower_followingIdTouserInput, userUpdateWithoutFollower_follower_followingIdTouserInput>, userUncheckedUpdateWithoutFollower_follower_followingIdTouserInput>
  }

  export type userCreateNestedOneWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    create?: XOR<userCreateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_receiverIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowrequest_followrequest_receiverIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFollowrequest_followrequest_senderIdTouserInput = {
    create?: XOR<userCreateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowrequest_followrequest_senderIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFollowrequest_followrequest_receiverIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_receiverIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowrequest_followrequest_receiverIdTouserInput
    upsert?: userUpsertWithoutFollowrequest_followrequest_receiverIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollowrequest_followrequest_receiverIdTouserInput, userUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput>, userUncheckedUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutFollowrequest_followrequest_senderIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowrequest_followrequest_senderIdTouserInput
    upsert?: userUpsertWithoutFollowrequest_followrequest_senderIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollowrequest_followrequest_senderIdTouserInput, userUpdateWithoutFollowrequest_followrequest_senderIdTouserInput>, userUncheckedUpdateWithoutFollowrequest_followrequest_senderIdTouserInput>
  }

  export type commentCreateNestedOneWithoutLikeInput = {
    create?: XOR<commentCreateWithoutLikeInput, commentUncheckedCreateWithoutLikeInput>
    connectOrCreate?: commentCreateOrConnectWithoutLikeInput
    connect?: commentWhereUniqueInput
  }

  export type postCreateNestedOneWithoutLikeInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLikeInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    connect?: userWhereUniqueInput
  }

  export type commentUpdateOneWithoutLikeNestedInput = {
    create?: XOR<commentCreateWithoutLikeInput, commentUncheckedCreateWithoutLikeInput>
    connectOrCreate?: commentCreateOrConnectWithoutLikeInput
    upsert?: commentUpsertWithoutLikeInput
    disconnect?: commentWhereInput | boolean
    delete?: commentWhereInput | boolean
    connect?: commentWhereUniqueInput
    update?: XOR<XOR<commentUpdateToOneWithWhereWithoutLikeInput, commentUpdateWithoutLikeInput>, commentUncheckedUpdateWithoutLikeInput>
  }

  export type postUpdateOneWithoutLikeNestedInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    upsert?: postUpsertWithoutLikeInput
    disconnect?: postWhereInput | boolean
    delete?: postWhereInput | boolean
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutLikeInput, postUpdateWithoutLikeInput>, postUncheckedUpdateWithoutLikeInput>
  }

  export type userUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    upsert?: userUpsertWithoutLikeInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLikeInput, userUpdateWithoutLikeInput>, userUncheckedUpdateWithoutLikeInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentCreateNestedManyWithoutPostInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type likeCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutPostInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    connect?: userWhereUniqueInput
  }

  export type commentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutPostInput | commentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutPostInput | commentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentUpdateManyWithWhereWithoutPostInput | commentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type likeUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    upsert?: userUpsertWithoutPostInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPostInput, userUpdateWithoutPostInput>, userUncheckedUpdateWithoutPostInput>
  }

  export type commentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutPostInput | commentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutPostInput | commentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentUpdateManyWithWhereWithoutPostInput | commentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutStoryInput = {
    create?: XOR<userCreateWithoutStoryInput, userUncheckedCreateWithoutStoryInput>
    connectOrCreate?: userCreateOrConnectWithoutStoryInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutStoryNestedInput = {
    create?: XOR<userCreateWithoutStoryInput, userUncheckedCreateWithoutStoryInput>
    connectOrCreate?: userCreateOrConnectWithoutStoryInput
    upsert?: userUpsertWithoutStoryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStoryInput, userUpdateWithoutStoryInput>, userUncheckedUpdateWithoutStoryInput>
  }

  export type blockCreateNestedManyWithoutUser_block_blockedIdTouserInput = {
    create?: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput> | blockCreateWithoutUser_block_blockedIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockedIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockedIdTouserInput | blockCreateOrConnectWithoutUser_block_blockedIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockedIdTouserInputEnvelope
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
  }

  export type blockCreateNestedManyWithoutUser_block_blockerIdTouserInput = {
    create?: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput> | blockCreateWithoutUser_block_blockerIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockerIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockerIdTouserInput | blockCreateOrConnectWithoutUser_block_blockerIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockerIdTouserInputEnvelope
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type followerCreateNestedManyWithoutUser_follower_followerIdTouserInput = {
    create?: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput> | followerCreateWithoutUser_follower_followerIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followerIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followerIdTouserInput | followerCreateOrConnectWithoutUser_follower_followerIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followerIdTouserInputEnvelope
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
  }

  export type followerCreateNestedManyWithoutUser_follower_followingIdTouserInput = {
    create?: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput> | followerCreateWithoutUser_follower_followingIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followingIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followingIdTouserInput | followerCreateOrConnectWithoutUser_follower_followingIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followingIdTouserInputEnvelope
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
  }

  export type followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput> | followrequestCreateWithoutUser_followrequest_receiverIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_receiverIdTouserInputEnvelope
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
  }

  export type followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput> | followrequestCreateWithoutUser_followrequest_senderIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_senderIdTouserInputEnvelope
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
  }

  export type likeCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type postCreateNestedManyWithoutUserInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type storyCreateNestedOneWithoutUserInput = {
    create?: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
    connectOrCreate?: storyCreateOrConnectWithoutUserInput
    connect?: storyWhereUniqueInput
  }

  export type blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput = {
    create?: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput> | blockCreateWithoutUser_block_blockedIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockedIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockedIdTouserInput | blockCreateOrConnectWithoutUser_block_blockedIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockedIdTouserInputEnvelope
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
  }

  export type blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput = {
    create?: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput> | blockCreateWithoutUser_block_blockerIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockerIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockerIdTouserInput | blockCreateOrConnectWithoutUser_block_blockerIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockerIdTouserInputEnvelope
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput = {
    create?: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput> | followerCreateWithoutUser_follower_followerIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followerIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followerIdTouserInput | followerCreateOrConnectWithoutUser_follower_followerIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followerIdTouserInputEnvelope
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
  }

  export type followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput = {
    create?: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput> | followerCreateWithoutUser_follower_followingIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followingIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followingIdTouserInput | followerCreateOrConnectWithoutUser_follower_followingIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followingIdTouserInputEnvelope
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
  }

  export type followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput> | followrequestCreateWithoutUser_followrequest_receiverIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_receiverIdTouserInputEnvelope
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
  }

  export type followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput> | followrequestCreateWithoutUser_followrequest_senderIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_senderIdTouserInputEnvelope
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type storyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
    connectOrCreate?: storyCreateOrConnectWithoutUserInput
    connect?: storyWhereUniqueInput
  }

  export type blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput = {
    create?: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput> | blockCreateWithoutUser_block_blockedIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockedIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockedIdTouserInput | blockCreateOrConnectWithoutUser_block_blockedIdTouserInput[]
    upsert?: blockUpsertWithWhereUniqueWithoutUser_block_blockedIdTouserInput | blockUpsertWithWhereUniqueWithoutUser_block_blockedIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockedIdTouserInputEnvelope
    set?: blockWhereUniqueInput | blockWhereUniqueInput[]
    disconnect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    delete?: blockWhereUniqueInput | blockWhereUniqueInput[]
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    update?: blockUpdateWithWhereUniqueWithoutUser_block_blockedIdTouserInput | blockUpdateWithWhereUniqueWithoutUser_block_blockedIdTouserInput[]
    updateMany?: blockUpdateManyWithWhereWithoutUser_block_blockedIdTouserInput | blockUpdateManyWithWhereWithoutUser_block_blockedIdTouserInput[]
    deleteMany?: blockScalarWhereInput | blockScalarWhereInput[]
  }

  export type blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput = {
    create?: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput> | blockCreateWithoutUser_block_blockerIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockerIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockerIdTouserInput | blockCreateOrConnectWithoutUser_block_blockerIdTouserInput[]
    upsert?: blockUpsertWithWhereUniqueWithoutUser_block_blockerIdTouserInput | blockUpsertWithWhereUniqueWithoutUser_block_blockerIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockerIdTouserInputEnvelope
    set?: blockWhereUniqueInput | blockWhereUniqueInput[]
    disconnect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    delete?: blockWhereUniqueInput | blockWhereUniqueInput[]
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    update?: blockUpdateWithWhereUniqueWithoutUser_block_blockerIdTouserInput | blockUpdateWithWhereUniqueWithoutUser_block_blockerIdTouserInput[]
    updateMany?: blockUpdateManyWithWhereWithoutUser_block_blockerIdTouserInput | blockUpdateManyWithWhereWithoutUser_block_blockerIdTouserInput[]
    deleteMany?: blockScalarWhereInput | blockScalarWhereInput[]
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput = {
    create?: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput> | followerCreateWithoutUser_follower_followerIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followerIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followerIdTouserInput | followerCreateOrConnectWithoutUser_follower_followerIdTouserInput[]
    upsert?: followerUpsertWithWhereUniqueWithoutUser_follower_followerIdTouserInput | followerUpsertWithWhereUniqueWithoutUser_follower_followerIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followerIdTouserInputEnvelope
    set?: followerWhereUniqueInput | followerWhereUniqueInput[]
    disconnect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    delete?: followerWhereUniqueInput | followerWhereUniqueInput[]
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    update?: followerUpdateWithWhereUniqueWithoutUser_follower_followerIdTouserInput | followerUpdateWithWhereUniqueWithoutUser_follower_followerIdTouserInput[]
    updateMany?: followerUpdateManyWithWhereWithoutUser_follower_followerIdTouserInput | followerUpdateManyWithWhereWithoutUser_follower_followerIdTouserInput[]
    deleteMany?: followerScalarWhereInput | followerScalarWhereInput[]
  }

  export type followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput = {
    create?: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput> | followerCreateWithoutUser_follower_followingIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followingIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followingIdTouserInput | followerCreateOrConnectWithoutUser_follower_followingIdTouserInput[]
    upsert?: followerUpsertWithWhereUniqueWithoutUser_follower_followingIdTouserInput | followerUpsertWithWhereUniqueWithoutUser_follower_followingIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followingIdTouserInputEnvelope
    set?: followerWhereUniqueInput | followerWhereUniqueInput[]
    disconnect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    delete?: followerWhereUniqueInput | followerWhereUniqueInput[]
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    update?: followerUpdateWithWhereUniqueWithoutUser_follower_followingIdTouserInput | followerUpdateWithWhereUniqueWithoutUser_follower_followingIdTouserInput[]
    updateMany?: followerUpdateManyWithWhereWithoutUser_follower_followingIdTouserInput | followerUpdateManyWithWhereWithoutUser_follower_followingIdTouserInput[]
    deleteMany?: followerScalarWhereInput | followerScalarWhereInput[]
  }

  export type followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput> | followrequestCreateWithoutUser_followrequest_receiverIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput[]
    upsert?: followrequestUpsertWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput | followrequestUpsertWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_receiverIdTouserInputEnvelope
    set?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    disconnect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    delete?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    update?: followrequestUpdateWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput | followrequestUpdateWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput[]
    updateMany?: followrequestUpdateManyWithWhereWithoutUser_followrequest_receiverIdTouserInput | followrequestUpdateManyWithWhereWithoutUser_followrequest_receiverIdTouserInput[]
    deleteMany?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
  }

  export type followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput> | followrequestCreateWithoutUser_followrequest_senderIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput[]
    upsert?: followrequestUpsertWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput | followrequestUpsertWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_senderIdTouserInputEnvelope
    set?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    disconnect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    delete?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    update?: followrequestUpdateWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput | followrequestUpdateWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput[]
    updateMany?: followrequestUpdateManyWithWhereWithoutUser_followrequest_senderIdTouserInput | followrequestUpdateManyWithWhereWithoutUser_followrequest_senderIdTouserInput[]
    deleteMany?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
  }

  export type likeUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type postUpdateManyWithoutUserNestedInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUserInput | postUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUserInput | postUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUserInput | postUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type storyUpdateOneWithoutUserNestedInput = {
    create?: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
    connectOrCreate?: storyCreateOrConnectWithoutUserInput
    upsert?: storyUpsertWithoutUserInput
    disconnect?: storyWhereInput | boolean
    delete?: storyWhereInput | boolean
    connect?: storyWhereUniqueInput
    update?: XOR<XOR<storyUpdateToOneWithWhereWithoutUserInput, storyUpdateWithoutUserInput>, storyUncheckedUpdateWithoutUserInput>
  }

  export type blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput = {
    create?: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput> | blockCreateWithoutUser_block_blockedIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockedIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockedIdTouserInput | blockCreateOrConnectWithoutUser_block_blockedIdTouserInput[]
    upsert?: blockUpsertWithWhereUniqueWithoutUser_block_blockedIdTouserInput | blockUpsertWithWhereUniqueWithoutUser_block_blockedIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockedIdTouserInputEnvelope
    set?: blockWhereUniqueInput | blockWhereUniqueInput[]
    disconnect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    delete?: blockWhereUniqueInput | blockWhereUniqueInput[]
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    update?: blockUpdateWithWhereUniqueWithoutUser_block_blockedIdTouserInput | blockUpdateWithWhereUniqueWithoutUser_block_blockedIdTouserInput[]
    updateMany?: blockUpdateManyWithWhereWithoutUser_block_blockedIdTouserInput | blockUpdateManyWithWhereWithoutUser_block_blockedIdTouserInput[]
    deleteMany?: blockScalarWhereInput | blockScalarWhereInput[]
  }

  export type blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput = {
    create?: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput> | blockCreateWithoutUser_block_blockerIdTouserInput[] | blockUncheckedCreateWithoutUser_block_blockerIdTouserInput[]
    connectOrCreate?: blockCreateOrConnectWithoutUser_block_blockerIdTouserInput | blockCreateOrConnectWithoutUser_block_blockerIdTouserInput[]
    upsert?: blockUpsertWithWhereUniqueWithoutUser_block_blockerIdTouserInput | blockUpsertWithWhereUniqueWithoutUser_block_blockerIdTouserInput[]
    createMany?: blockCreateManyUser_block_blockerIdTouserInputEnvelope
    set?: blockWhereUniqueInput | blockWhereUniqueInput[]
    disconnect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    delete?: blockWhereUniqueInput | blockWhereUniqueInput[]
    connect?: blockWhereUniqueInput | blockWhereUniqueInput[]
    update?: blockUpdateWithWhereUniqueWithoutUser_block_blockerIdTouserInput | blockUpdateWithWhereUniqueWithoutUser_block_blockerIdTouserInput[]
    updateMany?: blockUpdateManyWithWhereWithoutUser_block_blockerIdTouserInput | blockUpdateManyWithWhereWithoutUser_block_blockerIdTouserInput[]
    deleteMany?: blockScalarWhereInput | blockScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput = {
    create?: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput> | followerCreateWithoutUser_follower_followerIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followerIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followerIdTouserInput | followerCreateOrConnectWithoutUser_follower_followerIdTouserInput[]
    upsert?: followerUpsertWithWhereUniqueWithoutUser_follower_followerIdTouserInput | followerUpsertWithWhereUniqueWithoutUser_follower_followerIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followerIdTouserInputEnvelope
    set?: followerWhereUniqueInput | followerWhereUniqueInput[]
    disconnect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    delete?: followerWhereUniqueInput | followerWhereUniqueInput[]
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    update?: followerUpdateWithWhereUniqueWithoutUser_follower_followerIdTouserInput | followerUpdateWithWhereUniqueWithoutUser_follower_followerIdTouserInput[]
    updateMany?: followerUpdateManyWithWhereWithoutUser_follower_followerIdTouserInput | followerUpdateManyWithWhereWithoutUser_follower_followerIdTouserInput[]
    deleteMany?: followerScalarWhereInput | followerScalarWhereInput[]
  }

  export type followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput = {
    create?: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput> | followerCreateWithoutUser_follower_followingIdTouserInput[] | followerUncheckedCreateWithoutUser_follower_followingIdTouserInput[]
    connectOrCreate?: followerCreateOrConnectWithoutUser_follower_followingIdTouserInput | followerCreateOrConnectWithoutUser_follower_followingIdTouserInput[]
    upsert?: followerUpsertWithWhereUniqueWithoutUser_follower_followingIdTouserInput | followerUpsertWithWhereUniqueWithoutUser_follower_followingIdTouserInput[]
    createMany?: followerCreateManyUser_follower_followingIdTouserInputEnvelope
    set?: followerWhereUniqueInput | followerWhereUniqueInput[]
    disconnect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    delete?: followerWhereUniqueInput | followerWhereUniqueInput[]
    connect?: followerWhereUniqueInput | followerWhereUniqueInput[]
    update?: followerUpdateWithWhereUniqueWithoutUser_follower_followingIdTouserInput | followerUpdateWithWhereUniqueWithoutUser_follower_followingIdTouserInput[]
    updateMany?: followerUpdateManyWithWhereWithoutUser_follower_followingIdTouserInput | followerUpdateManyWithWhereWithoutUser_follower_followingIdTouserInput[]
    deleteMany?: followerScalarWhereInput | followerScalarWhereInput[]
  }

  export type followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput> | followrequestCreateWithoutUser_followrequest_receiverIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput[]
    upsert?: followrequestUpsertWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput | followrequestUpsertWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_receiverIdTouserInputEnvelope
    set?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    disconnect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    delete?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    update?: followrequestUpdateWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput | followrequestUpdateWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput[]
    updateMany?: followrequestUpdateManyWithWhereWithoutUser_followrequest_receiverIdTouserInput | followrequestUpdateManyWithWhereWithoutUser_followrequest_receiverIdTouserInput[]
    deleteMany?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
  }

  export type followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput = {
    create?: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput> | followrequestCreateWithoutUser_followrequest_senderIdTouserInput[] | followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput[]
    connectOrCreate?: followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput | followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput[]
    upsert?: followrequestUpsertWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput | followrequestUpsertWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput[]
    createMany?: followrequestCreateManyUser_followrequest_senderIdTouserInputEnvelope
    set?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    disconnect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    delete?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    connect?: followrequestWhereUniqueInput | followrequestWhereUniqueInput[]
    update?: followrequestUpdateWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput | followrequestUpdateWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput[]
    updateMany?: followrequestUpdateManyWithWhereWithoutUser_followrequest_senderIdTouserInput | followrequestUpdateManyWithWhereWithoutUser_followrequest_senderIdTouserInput[]
    deleteMany?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput> | postCreateWithoutUserInput[] | postUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUserInput | postCreateOrConnectWithoutUserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUserInput | postUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postCreateManyUserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUserInput | postUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUserInput | postUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type storyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
    connectOrCreate?: storyCreateOrConnectWithoutUserInput
    upsert?: storyUpsertWithoutUserInput
    disconnect?: storyWhereInput | boolean
    delete?: storyWhereInput | boolean
    connect?: storyWhereUniqueInput
    update?: XOR<XOR<storyUpdateToOneWithWhereWithoutUserInput, storyUpdateWithoutUserInput>, storyUncheckedUpdateWithoutUserInput>
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

  export type userCreateWithoutBlock_block_blockedIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutBlock_block_blockedIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutBlock_block_blockedIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBlock_block_blockedIdTouserInput, userUncheckedCreateWithoutBlock_block_blockedIdTouserInput>
  }

  export type userCreateWithoutBlock_block_blockerIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutBlock_block_blockerIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutBlock_block_blockerIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBlock_block_blockerIdTouserInput, userUncheckedCreateWithoutBlock_block_blockerIdTouserInput>
  }

  export type userUpsertWithoutBlock_block_blockedIdTouserInput = {
    update: XOR<userUpdateWithoutBlock_block_blockedIdTouserInput, userUncheckedUpdateWithoutBlock_block_blockedIdTouserInput>
    create: XOR<userCreateWithoutBlock_block_blockedIdTouserInput, userUncheckedCreateWithoutBlock_block_blockedIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBlock_block_blockedIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBlock_block_blockedIdTouserInput, userUncheckedUpdateWithoutBlock_block_blockedIdTouserInput>
  }

  export type userUpdateWithoutBlock_block_blockedIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBlock_block_blockedIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUpsertWithoutBlock_block_blockerIdTouserInput = {
    update: XOR<userUpdateWithoutBlock_block_blockerIdTouserInput, userUncheckedUpdateWithoutBlock_block_blockerIdTouserInput>
    create: XOR<userCreateWithoutBlock_block_blockerIdTouserInput, userUncheckedCreateWithoutBlock_block_blockerIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBlock_block_blockerIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBlock_block_blockerIdTouserInput, userUncheckedUpdateWithoutBlock_block_blockerIdTouserInput>
  }

  export type userUpdateWithoutBlock_block_blockerIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBlock_block_blockerIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type postCreateWithoutCommentInput = {
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    like?: likeCreateNestedManyWithoutPostInput
    user: userCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateWithoutCommentInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutCommentInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
  }

  export type userCreateWithoutCommentInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCommentInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCommentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
  }

  export type likeCreateWithoutCommentInput = {
    createdAt?: Date | string
    post?: postCreateNestedOneWithoutLikeInput
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutCommentInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId?: number | null
  }

  export type likeCreateOrConnectWithoutCommentInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput>
  }

  export type likeCreateManyCommentInputEnvelope = {
    data: likeCreateManyCommentInput | likeCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type postUpsertWithoutCommentInput = {
    update: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutCommentInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
  }

  export type postUpdateWithoutCommentInput = {
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: likeUpdateManyWithoutPostNestedInput
    user?: userUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type userUpsertWithoutCommentInput = {
    update: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCommentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
  }

  export type userUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type likeUpsertWithWhereUniqueWithoutCommentInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutCommentInput, likeUncheckedUpdateWithoutCommentInput>
    create: XOR<likeCreateWithoutCommentInput, likeUncheckedCreateWithoutCommentInput>
  }

  export type likeUpdateWithWhereUniqueWithoutCommentInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutCommentInput, likeUncheckedUpdateWithoutCommentInput>
  }

  export type likeUpdateManyWithWhereWithoutCommentInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutCommentInput>
  }

  export type likeScalarWhereInput = {
    AND?: likeScalarWhereInput | likeScalarWhereInput[]
    OR?: likeScalarWhereInput[]
    NOT?: likeScalarWhereInput | likeScalarWhereInput[]
    id?: IntFilter<"like"> | number
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: StringFilter<"like"> | string
    postId?: IntNullableFilter<"like"> | number | null
    commentId?: IntNullableFilter<"like"> | number | null
  }

  export type userCreateWithoutFollower_follower_followerIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollower_follower_followerIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollower_follower_followerIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollower_follower_followerIdTouserInput, userUncheckedCreateWithoutFollower_follower_followerIdTouserInput>
  }

  export type userCreateWithoutFollower_follower_followingIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollower_follower_followingIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollower_follower_followingIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollower_follower_followingIdTouserInput, userUncheckedCreateWithoutFollower_follower_followingIdTouserInput>
  }

  export type userUpsertWithoutFollower_follower_followerIdTouserInput = {
    update: XOR<userUpdateWithoutFollower_follower_followerIdTouserInput, userUncheckedUpdateWithoutFollower_follower_followerIdTouserInput>
    create: XOR<userCreateWithoutFollower_follower_followerIdTouserInput, userUncheckedCreateWithoutFollower_follower_followerIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollower_follower_followerIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollower_follower_followerIdTouserInput, userUncheckedUpdateWithoutFollower_follower_followerIdTouserInput>
  }

  export type userUpdateWithoutFollower_follower_followerIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollower_follower_followerIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUpsertWithoutFollower_follower_followingIdTouserInput = {
    update: XOR<userUpdateWithoutFollower_follower_followingIdTouserInput, userUncheckedUpdateWithoutFollower_follower_followingIdTouserInput>
    create: XOR<userCreateWithoutFollower_follower_followingIdTouserInput, userUncheckedCreateWithoutFollower_follower_followingIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollower_follower_followingIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollower_follower_followingIdTouserInput, userUncheckedUpdateWithoutFollower_follower_followingIdTouserInput>
  }

  export type userUpdateWithoutFollower_follower_followingIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollower_follower_followingIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_receiverIdTouserInput>
  }

  export type userCreateWithoutFollowrequest_followrequest_senderIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowrequest_followrequest_senderIdTouserInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowrequest_followrequest_senderIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_senderIdTouserInput>
  }

  export type userUpsertWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    update: XOR<userUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput>
    create: XOR<userCreateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_receiverIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput, userUncheckedUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput>
  }

  export type userUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowrequest_followrequest_receiverIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUpsertWithoutFollowrequest_followrequest_senderIdTouserInput = {
    update: XOR<userUpdateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedUpdateWithoutFollowrequest_followrequest_senderIdTouserInput>
    create: XOR<userCreateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedCreateWithoutFollowrequest_followrequest_senderIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollowrequest_followrequest_senderIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollowrequest_followrequest_senderIdTouserInput, userUncheckedUpdateWithoutFollowrequest_followrequest_senderIdTouserInput>
  }

  export type userUpdateWithoutFollowrequest_followrequest_senderIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowrequest_followrequest_senderIdTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type commentCreateWithoutLikeInput = {
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutLikeInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    postId: number
  }

  export type commentCreateOrConnectWithoutLikeInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutLikeInput, commentUncheckedCreateWithoutLikeInput>
  }

  export type postCreateWithoutLikeInput = {
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    user: userCreateNestedOneWithoutPostInput
  }

  export type postUncheckedCreateWithoutLikeInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutLikeInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
  }

  export type userCreateWithoutLikeInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    post?: postCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLikeInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutLikeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
  }

  export type commentUpsertWithoutLikeInput = {
    update: XOR<commentUpdateWithoutLikeInput, commentUncheckedUpdateWithoutLikeInput>
    create: XOR<commentCreateWithoutLikeInput, commentUncheckedCreateWithoutLikeInput>
    where?: commentWhereInput
  }

  export type commentUpdateToOneWithWhereWithoutLikeInput = {
    where?: commentWhereInput
    data: XOR<commentUpdateWithoutLikeInput, commentUncheckedUpdateWithoutLikeInput>
  }

  export type commentUpdateWithoutLikeInput = {
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type postUpsertWithoutLikeInput = {
    update: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutLikeInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
  }

  export type postUpdateWithoutLikeInput = {
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    user?: userUpdateOneRequiredWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type userUpsertWithoutLikeInput = {
    update: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLikeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
  }

  export type userUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type commentCreateWithoutPostInput = {
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutCommentInput
    like?: likeCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutPostInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    like?: likeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentCreateOrConnectWithoutPostInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentCreateManyPostInputEnvelope = {
    data: commentCreateManyPostInput | commentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutPostInput = {
    createdAt?: Date | string
    comment?: commentCreateNestedOneWithoutLikeInput
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    commentId?: number | null
  }

  export type likeCreateOrConnectWithoutPostInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeCreateManyPostInputEnvelope = {
    data: likeCreateManyPostInput | likeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutPostInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    story?: storyCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutPostInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    story?: storyUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutPostInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
  }

  export type commentUpsertWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentUpdateWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
  }

  export type commentUpdateManyWithWhereWithoutPostInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutPostInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: IntFilter<"comment"> | number
    desc?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    updatedAt?: DateTimeFilter<"comment"> | Date | string
    userId?: StringFilter<"comment"> | string
    postId?: IntFilter<"comment"> | number
  }

  export type likeUpsertWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeUpdateWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
  }

  export type likeUpdateManyWithWhereWithoutPostInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutPostInput>
  }

  export type userUpsertWithoutPostInput = {
    update: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPostInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
  }

  export type userUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    story?: storyUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    story?: storyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutStoryInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStoryInput = {
    id?: string
    username: string
    avatar?: string | null
    cover?: string | null
    name?: string | null
    surname?: string | null
    description?: string | null
    city?: string | null
    school?: string | null
    work?: string | null
    website?: string | null
    createdAt?: Date | string
    block_block_blockedIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockedIdTouserInput
    block_block_blockerIdTouser?: blockUncheckedCreateNestedManyWithoutUser_block_blockerIdTouserInput
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follower_follower_followerIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followerIdTouserInput
    follower_follower_followingIdTouser?: followerUncheckedCreateNestedManyWithoutUser_follower_followingIdTouserInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_receiverIdTouserInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedCreateNestedManyWithoutUser_followrequest_senderIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStoryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStoryInput, userUncheckedCreateWithoutStoryInput>
  }

  export type userUpsertWithoutStoryInput = {
    update: XOR<userUpdateWithoutStoryInput, userUncheckedUpdateWithoutStoryInput>
    create: XOR<userCreateWithoutStoryInput, userUncheckedCreateWithoutStoryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStoryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStoryInput, userUncheckedUpdateWithoutStoryInput>
  }

  export type userUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block_block_blockedIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserNestedInput
    block_block_blockerIdTouser?: blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserNestedInput
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follower_follower_followerIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserNestedInput
    follower_follower_followingIdTouser?: followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserNestedInput
    followrequest_followrequest_receiverIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserNestedInput
    followrequest_followrequest_senderIdTouser?: followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type blockCreateWithoutUser_block_blockedIdTouserInput = {
    createdAt?: Date | string
    user_block_blockerIdTouser: userCreateNestedOneWithoutBlock_block_blockerIdTouserInput
  }

  export type blockUncheckedCreateWithoutUser_block_blockedIdTouserInput = {
    id?: number
    createdAt?: Date | string
    blockerId: string
  }

  export type blockCreateOrConnectWithoutUser_block_blockedIdTouserInput = {
    where: blockWhereUniqueInput
    create: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput>
  }

  export type blockCreateManyUser_block_blockedIdTouserInputEnvelope = {
    data: blockCreateManyUser_block_blockedIdTouserInput | blockCreateManyUser_block_blockedIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type blockCreateWithoutUser_block_blockerIdTouserInput = {
    createdAt?: Date | string
    user_block_blockedIdTouser: userCreateNestedOneWithoutBlock_block_blockedIdTouserInput
  }

  export type blockUncheckedCreateWithoutUser_block_blockerIdTouserInput = {
    id?: number
    createdAt?: Date | string
    blockedId: string
  }

  export type blockCreateOrConnectWithoutUser_block_blockerIdTouserInput = {
    where: blockWhereUniqueInput
    create: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput>
  }

  export type blockCreateManyUser_block_blockerIdTouserInputEnvelope = {
    data: blockCreateManyUser_block_blockerIdTouserInput | blockCreateManyUser_block_blockerIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutUserInput = {
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    post: postCreateNestedOneWithoutCommentInput
    like?: likeCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    postId: number
    like?: likeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: commentCreateManyUserInput | commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type followerCreateWithoutUser_follower_followerIdTouserInput = {
    createdAt?: Date | string
    user_follower_followingIdTouser: userCreateNestedOneWithoutFollower_follower_followingIdTouserInput
  }

  export type followerUncheckedCreateWithoutUser_follower_followerIdTouserInput = {
    id?: number
    createdAt?: Date | string
    followingId: string
  }

  export type followerCreateOrConnectWithoutUser_follower_followerIdTouserInput = {
    where: followerWhereUniqueInput
    create: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput>
  }

  export type followerCreateManyUser_follower_followerIdTouserInputEnvelope = {
    data: followerCreateManyUser_follower_followerIdTouserInput | followerCreateManyUser_follower_followerIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type followerCreateWithoutUser_follower_followingIdTouserInput = {
    createdAt?: Date | string
    user_follower_followerIdTouser: userCreateNestedOneWithoutFollower_follower_followerIdTouserInput
  }

  export type followerUncheckedCreateWithoutUser_follower_followingIdTouserInput = {
    id?: number
    createdAt?: Date | string
    followerId: string
  }

  export type followerCreateOrConnectWithoutUser_follower_followingIdTouserInput = {
    where: followerWhereUniqueInput
    create: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput>
  }

  export type followerCreateManyUser_follower_followingIdTouserInputEnvelope = {
    data: followerCreateManyUser_follower_followingIdTouserInput | followerCreateManyUser_follower_followingIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type followrequestCreateWithoutUser_followrequest_receiverIdTouserInput = {
    createdAt?: Date | string
    user_followrequest_senderIdTouser: userCreateNestedOneWithoutFollowrequest_followrequest_senderIdTouserInput
  }

  export type followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput = {
    id?: number
    createdAt?: Date | string
    senderId: string
  }

  export type followrequestCreateOrConnectWithoutUser_followrequest_receiverIdTouserInput = {
    where: followrequestWhereUniqueInput
    create: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput>
  }

  export type followrequestCreateManyUser_followrequest_receiverIdTouserInputEnvelope = {
    data: followrequestCreateManyUser_followrequest_receiverIdTouserInput | followrequestCreateManyUser_followrequest_receiverIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type followrequestCreateWithoutUser_followrequest_senderIdTouserInput = {
    createdAt?: Date | string
    user_followrequest_receiverIdTouser: userCreateNestedOneWithoutFollowrequest_followrequest_receiverIdTouserInput
  }

  export type followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput = {
    id?: number
    createdAt?: Date | string
    receiverId: string
  }

  export type followrequestCreateOrConnectWithoutUser_followrequest_senderIdTouserInput = {
    where: followrequestWhereUniqueInput
    create: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput>
  }

  export type followrequestCreateManyUser_followrequest_senderIdTouserInputEnvelope = {
    data: followrequestCreateManyUser_followrequest_senderIdTouserInput | followrequestCreateManyUser_followrequest_senderIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutUserInput = {
    createdAt?: Date | string
    comment?: commentCreateNestedOneWithoutLikeInput
    post?: postCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    postId?: number | null
    commentId?: number | null
  }

  export type likeCreateOrConnectWithoutUserInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeCreateManyUserInputEnvelope = {
    data: likeCreateManyUserInput | likeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type postCreateWithoutUserInput = {
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateWithoutUserInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutUserInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postCreateManyUserInputEnvelope = {
    data: postCreateManyUserInput | postCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type storyCreateWithoutUserInput = {
    createdAt?: Date | string
    expiresAt: Date | string
    img: string
  }

  export type storyUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    expiresAt: Date | string
    img: string
  }

  export type storyCreateOrConnectWithoutUserInput = {
    where: storyWhereUniqueInput
    create: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
  }

  export type blockUpsertWithWhereUniqueWithoutUser_block_blockedIdTouserInput = {
    where: blockWhereUniqueInput
    update: XOR<blockUpdateWithoutUser_block_blockedIdTouserInput, blockUncheckedUpdateWithoutUser_block_blockedIdTouserInput>
    create: XOR<blockCreateWithoutUser_block_blockedIdTouserInput, blockUncheckedCreateWithoutUser_block_blockedIdTouserInput>
  }

  export type blockUpdateWithWhereUniqueWithoutUser_block_blockedIdTouserInput = {
    where: blockWhereUniqueInput
    data: XOR<blockUpdateWithoutUser_block_blockedIdTouserInput, blockUncheckedUpdateWithoutUser_block_blockedIdTouserInput>
  }

  export type blockUpdateManyWithWhereWithoutUser_block_blockedIdTouserInput = {
    where: blockScalarWhereInput
    data: XOR<blockUpdateManyMutationInput, blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserInput>
  }

  export type blockScalarWhereInput = {
    AND?: blockScalarWhereInput | blockScalarWhereInput[]
    OR?: blockScalarWhereInput[]
    NOT?: blockScalarWhereInput | blockScalarWhereInput[]
    id?: IntFilter<"block"> | number
    createdAt?: DateTimeFilter<"block"> | Date | string
    blockerId?: StringFilter<"block"> | string
    blockedId?: StringFilter<"block"> | string
  }

  export type blockUpsertWithWhereUniqueWithoutUser_block_blockerIdTouserInput = {
    where: blockWhereUniqueInput
    update: XOR<blockUpdateWithoutUser_block_blockerIdTouserInput, blockUncheckedUpdateWithoutUser_block_blockerIdTouserInput>
    create: XOR<blockCreateWithoutUser_block_blockerIdTouserInput, blockUncheckedCreateWithoutUser_block_blockerIdTouserInput>
  }

  export type blockUpdateWithWhereUniqueWithoutUser_block_blockerIdTouserInput = {
    where: blockWhereUniqueInput
    data: XOR<blockUpdateWithoutUser_block_blockerIdTouserInput, blockUncheckedUpdateWithoutUser_block_blockerIdTouserInput>
  }

  export type blockUpdateManyWithWhereWithoutUser_block_blockerIdTouserInput = {
    where: blockScalarWhereInput
    data: XOR<blockUpdateManyMutationInput, blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserInput>
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutUserInput>
  }

  export type followerUpsertWithWhereUniqueWithoutUser_follower_followerIdTouserInput = {
    where: followerWhereUniqueInput
    update: XOR<followerUpdateWithoutUser_follower_followerIdTouserInput, followerUncheckedUpdateWithoutUser_follower_followerIdTouserInput>
    create: XOR<followerCreateWithoutUser_follower_followerIdTouserInput, followerUncheckedCreateWithoutUser_follower_followerIdTouserInput>
  }

  export type followerUpdateWithWhereUniqueWithoutUser_follower_followerIdTouserInput = {
    where: followerWhereUniqueInput
    data: XOR<followerUpdateWithoutUser_follower_followerIdTouserInput, followerUncheckedUpdateWithoutUser_follower_followerIdTouserInput>
  }

  export type followerUpdateManyWithWhereWithoutUser_follower_followerIdTouserInput = {
    where: followerScalarWhereInput
    data: XOR<followerUpdateManyMutationInput, followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserInput>
  }

  export type followerScalarWhereInput = {
    AND?: followerScalarWhereInput | followerScalarWhereInput[]
    OR?: followerScalarWhereInput[]
    NOT?: followerScalarWhereInput | followerScalarWhereInput[]
    id?: IntFilter<"follower"> | number
    createdAt?: DateTimeFilter<"follower"> | Date | string
    followerId?: StringFilter<"follower"> | string
    followingId?: StringFilter<"follower"> | string
  }

  export type followerUpsertWithWhereUniqueWithoutUser_follower_followingIdTouserInput = {
    where: followerWhereUniqueInput
    update: XOR<followerUpdateWithoutUser_follower_followingIdTouserInput, followerUncheckedUpdateWithoutUser_follower_followingIdTouserInput>
    create: XOR<followerCreateWithoutUser_follower_followingIdTouserInput, followerUncheckedCreateWithoutUser_follower_followingIdTouserInput>
  }

  export type followerUpdateWithWhereUniqueWithoutUser_follower_followingIdTouserInput = {
    where: followerWhereUniqueInput
    data: XOR<followerUpdateWithoutUser_follower_followingIdTouserInput, followerUncheckedUpdateWithoutUser_follower_followingIdTouserInput>
  }

  export type followerUpdateManyWithWhereWithoutUser_follower_followingIdTouserInput = {
    where: followerScalarWhereInput
    data: XOR<followerUpdateManyMutationInput, followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserInput>
  }

  export type followrequestUpsertWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput = {
    where: followrequestWhereUniqueInput
    update: XOR<followrequestUpdateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedUpdateWithoutUser_followrequest_receiverIdTouserInput>
    create: XOR<followrequestCreateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_receiverIdTouserInput>
  }

  export type followrequestUpdateWithWhereUniqueWithoutUser_followrequest_receiverIdTouserInput = {
    where: followrequestWhereUniqueInput
    data: XOR<followrequestUpdateWithoutUser_followrequest_receiverIdTouserInput, followrequestUncheckedUpdateWithoutUser_followrequest_receiverIdTouserInput>
  }

  export type followrequestUpdateManyWithWhereWithoutUser_followrequest_receiverIdTouserInput = {
    where: followrequestScalarWhereInput
    data: XOR<followrequestUpdateManyMutationInput, followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserInput>
  }

  export type followrequestScalarWhereInput = {
    AND?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
    OR?: followrequestScalarWhereInput[]
    NOT?: followrequestScalarWhereInput | followrequestScalarWhereInput[]
    id?: IntFilter<"followrequest"> | number
    createdAt?: DateTimeFilter<"followrequest"> | Date | string
    senderId?: StringFilter<"followrequest"> | string
    receiverId?: StringFilter<"followrequest"> | string
  }

  export type followrequestUpsertWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput = {
    where: followrequestWhereUniqueInput
    update: XOR<followrequestUpdateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedUpdateWithoutUser_followrequest_senderIdTouserInput>
    create: XOR<followrequestCreateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedCreateWithoutUser_followrequest_senderIdTouserInput>
  }

  export type followrequestUpdateWithWhereUniqueWithoutUser_followrequest_senderIdTouserInput = {
    where: followrequestWhereUniqueInput
    data: XOR<followrequestUpdateWithoutUser_followrequest_senderIdTouserInput, followrequestUncheckedUpdateWithoutUser_followrequest_senderIdTouserInput>
  }

  export type followrequestUpdateManyWithWhereWithoutUser_followrequest_senderIdTouserInput = {
    where: followrequestScalarWhereInput
    data: XOR<followrequestUpdateManyMutationInput, followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserInput>
  }

  export type likeUpsertWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeUpdateWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
  }

  export type likeUpdateManyWithWhereWithoutUserInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutUserInput>
  }

  export type postUpsertWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postUpdateWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
  }

  export type postUpdateManyWithWhereWithoutUserInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutUserInput>
  }

  export type postScalarWhereInput = {
    AND?: postScalarWhereInput | postScalarWhereInput[]
    OR?: postScalarWhereInput[]
    NOT?: postScalarWhereInput | postScalarWhereInput[]
    id?: IntFilter<"post"> | number
    desc?: StringFilter<"post"> | string
    img?: StringNullableFilter<"post"> | string | null
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    userId?: StringFilter<"post"> | string
  }

  export type storyUpsertWithoutUserInput = {
    update: XOR<storyUpdateWithoutUserInput, storyUncheckedUpdateWithoutUserInput>
    create: XOR<storyCreateWithoutUserInput, storyUncheckedCreateWithoutUserInput>
    where?: storyWhereInput
  }

  export type storyUpdateToOneWithWhereWithoutUserInput = {
    where?: storyWhereInput
    data: XOR<storyUpdateWithoutUserInput, storyUncheckedUpdateWithoutUserInput>
  }

  export type storyUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type storyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type likeCreateManyCommentInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    postId?: number | null
  }

  export type likeUpdateWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneWithoutLikeNestedInput
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likeUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentCreateManyPostInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
  }

  export type likeCreateManyPostInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    commentId?: number | null
  }

  export type commentUpdateWithoutPostInput = {
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCommentNestedInput
    like?: likeUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    like?: likeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type likeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutLikeNestedInput
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type blockCreateManyUser_block_blockedIdTouserInput = {
    id?: number
    createdAt?: Date | string
    blockerId: string
  }

  export type blockCreateManyUser_block_blockerIdTouserInput = {
    id?: number
    createdAt?: Date | string
    blockedId: string
  }

  export type commentCreateManyUserInput = {
    id?: number
    desc: string
    createdAt?: Date | string
    updatedAt: Date | string
    postId: number
  }

  export type followerCreateManyUser_follower_followerIdTouserInput = {
    id?: number
    createdAt?: Date | string
    followingId: string
  }

  export type followerCreateManyUser_follower_followingIdTouserInput = {
    id?: number
    createdAt?: Date | string
    followerId: string
  }

  export type followrequestCreateManyUser_followrequest_receiverIdTouserInput = {
    id?: number
    createdAt?: Date | string
    senderId: string
  }

  export type followrequestCreateManyUser_followrequest_senderIdTouserInput = {
    id?: number
    createdAt?: Date | string
    receiverId: string
  }

  export type likeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    postId?: number | null
    commentId?: number | null
  }

  export type postCreateManyUserInput = {
    id?: number
    desc: string
    img?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type blockUpdateWithoutUser_block_blockedIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_block_blockerIdTouser?: userUpdateOneRequiredWithoutBlock_block_blockerIdTouserNestedInput
  }

  export type blockUncheckedUpdateWithoutUser_block_blockedIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type blockUncheckedUpdateManyWithoutUser_block_blockedIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type blockUpdateWithoutUser_block_blockerIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_block_blockedIdTouser?: userUpdateOneRequiredWithoutBlock_block_blockedIdTouserNestedInput
  }

  export type blockUncheckedUpdateWithoutUser_block_blockerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type blockUncheckedUpdateManyWithoutUser_block_blockerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type commentUpdateWithoutUserInput = {
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    like?: likeUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    like?: likeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type followerUpdateWithoutUser_follower_followerIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follower_followingIdTouser?: userUpdateOneRequiredWithoutFollower_follower_followingIdTouserNestedInput
  }

  export type followerUncheckedUpdateWithoutUser_follower_followerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type followerUncheckedUpdateManyWithoutUser_follower_followerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type followerUpdateWithoutUser_follower_followingIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follower_followerIdTouser?: userUpdateOneRequiredWithoutFollower_follower_followerIdTouserNestedInput
  }

  export type followerUncheckedUpdateWithoutUser_follower_followingIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: StringFieldUpdateOperationsInput | string
  }

  export type followerUncheckedUpdateManyWithoutUser_follower_followingIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestUpdateWithoutUser_followrequest_receiverIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_followrequest_senderIdTouser?: userUpdateOneRequiredWithoutFollowrequest_followrequest_senderIdTouserNestedInput
  }

  export type followrequestUncheckedUpdateWithoutUser_followrequest_receiverIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestUncheckedUpdateManyWithoutUser_followrequest_receiverIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestUpdateWithoutUser_followrequest_senderIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_followrequest_receiverIdTouser?: userUpdateOneRequiredWithoutFollowrequest_followrequest_receiverIdTouserNestedInput
  }

  export type followrequestUncheckedUpdateWithoutUser_followrequest_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type followrequestUncheckedUpdateManyWithoutUser_followrequest_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type likeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutLikeNestedInput
    post?: postUpdateOneWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postUpdateWithoutUserInput = {
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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