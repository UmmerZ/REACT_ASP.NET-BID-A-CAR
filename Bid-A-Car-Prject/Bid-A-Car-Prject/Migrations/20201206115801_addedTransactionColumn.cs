using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Bid_A_Car_Prject.Migrations
{
    public partial class addedTransactionColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int(10)", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(100)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                        .Annotation("MySql:Collation", "utf8mb4_general_ci"),
                    UserName = table.Column<string>(type: "varchar(50)", nullable: true),
                    Email = table.Column<string>(type: "varchar(100)", nullable: true),
                    Password = table.Column<string>(type: "varchar(1000)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "varchar(10)", nullable: true),
                    StreetAdress = table.Column<string>(type: "varchar(200)", nullable: true),
                    City = table.Column<string>(type: "varchar(50)", nullable: true),
                    PostalCode = table.Column<string>(type: "varchar(8)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserID);
                });

            migrationBuilder.CreateTable(
                name: "Transaction",
                columns: table => new
                {
                    TransactionID = table.Column<int>(type: "int(10)", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    SellerID = table.Column<int>(type: "int(10)", nullable: false),
                    BuyerID = table.Column<int>(type: "int(10)", nullable: false),
                    NumberOfBids = table.Column<int>(type: "int(10)", nullable: false),
                    SaleAmount = table.Column<int>(type: "int(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transaction", x => x.TransactionID);
                    table.ForeignKey(
                        name: "FK_Transaction_User",
                        column: x => x.SellerID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int(10)", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Make = table.Column<string>(type: "varchar(60)", nullable: false),
                    Model = table.Column<string>(type: "varchar(60)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                        .Annotation("MySql:Collation", "utf8mb4_general_ci"),
                    Kilometers = table.Column<int>(type: "int(9)", nullable: false),
                    Year = table.Column<int>(type: "int(6)", nullable: false),
                    Description = table.Column<string>(type: "varchar(500)", nullable: true),
                    UserID = table.Column<int>(type: "int(10)", nullable: false),
                    IsSold = table.Column<string>(type: "varchar(10)", nullable: false),
                    Price = table.Column<int>(type: "int(10)", nullable: false),
                    Color = table.Column<string>(type: "varchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Vehicle_User",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "UserID", "City", "Email", "Name", "Password", "PhoneNumber", "PostalCode", "StreetAdress", "UserName" },
                values: new object[] { -1, "Edmonton", "john@example.com", "John", "password", "780000000", "T5T5T5", " 111 Crescent Ave", "johnny123" });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "UserID", "City", "Email", "Name", "Password", "PhoneNumber", "PostalCode", "StreetAdress", "UserName" },
                values: new object[] { -2, "Calgary", "bill@example.com", "Bill", "password", "780111111", "T6T6T6", " 222 Crescent Ave", "billy123" });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "UserID", "City", "Email", "Name", "Password", "PhoneNumber", "PostalCode", "StreetAdress", "UserName" },
                values: new object[] { -3, "Chicago", "peter@example.com", "Peter", "password", "780225887", "T7T7T7", " 666 Crescent Ave", "johnny123" });

            migrationBuilder.InsertData(
                table: "Vehicle",
                columns: new[] { "ID", "Color", "Description", "IsSold", "Kilometers", "Make", "Model", "Price", "UserID", "Year" },
                values: new object[] { -2, null, "3 year old drives like brand new ", "0", 13000, "AUDI", "Q5", 40000, -1, 2012 });

            migrationBuilder.InsertData(
                table: "Vehicle",
                columns: new[] { "ID", "Color", "Description", "IsSold", "Kilometers", "Make", "Model", "Price", "UserID", "Year" },
                values: new object[] { -1, null, "The cat is in mint condition, Lady Driven ", "0", 3000, "BMW", "X5", 30000, -2, 2014 });

            migrationBuilder.InsertData(
                table: "Vehicle",
                columns: new[] { "ID", "Color", "Description", "IsSold", "Kilometers", "Make", "Model", "Price", "UserID", "Year" },
                values: new object[] { -3, null, "Trick runs smooth Dont need it any more ", "0", 33000, "Ford", "F150", 20000, -3, 2018 });

            migrationBuilder.CreateIndex(
                name: "FK_Transaction_User",
                table: "Transaction",
                column: "SellerID");

            migrationBuilder.CreateIndex(
                name: "FK_Vehicle_User",
                table: "Vehicle",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transaction");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
