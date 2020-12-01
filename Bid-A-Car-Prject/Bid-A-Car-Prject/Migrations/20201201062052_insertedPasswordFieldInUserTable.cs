using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Bid_A_Car_Prject.Migrations
{
    public partial class insertedPasswordFieldInUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Password",
                table: "User",
                type: "binary(100)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "binary(1000)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Password",
                table: "User",
                type: "binary(1000)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "binary(100)",
                oldNullable: true);
        }
    }
}
