/**
 * PrismaMigration
 * A PrismaMigration
 */
declare interface PrismaMigration {
    id?: string;
    appliedStepsCount: number;
    checksum: string;
    finishedAt?: string | null;
    logs?: string | null;
    migrationName: string;
    rolledBackAt?: string | null;
    startedAt: string;
}
export { PrismaMigration };
