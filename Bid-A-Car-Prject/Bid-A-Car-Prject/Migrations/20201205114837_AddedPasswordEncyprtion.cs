using Microsoft.EntityFrameworkCore.Migrations;

namespace Bid_A_Car_Prject.Migrations
{
    public partial class AddedPasswordEncyprtion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "Vehicle",
                type: "varchar(60)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .Annotation("MySql:Collation", "utf8mb4_general_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:Collation", "utf8mb4_general_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "User",
                type: "varchar(1000)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(20)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "Vehicle",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .Annotation("MySql:Collation", "utf8mb4_general_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:Collation", "utf8mb4_general_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "User",
                type: "varchar(20)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(1000)",
                oldNullable: true);
        }
    }
}
